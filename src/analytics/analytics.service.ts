import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

export interface TrainerPerformanceEntry {
  formateur_id: string;
  trainingsCount: number;
  revenue: number;
  // You might want to add attendanceRate here later if needed
  // attendanceRate?: number;
}

export interface AverageSatisfactionEntry {
  surveyId: string;
  title: string;
  averageScore: number;
  // It might be useful to also include which training this survey is for, if applicable
  // trainingId?: string;
  // trainingTitle?: string;
}

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  evaluateThreshold(
    value: number,
    { warning, critical }: { warning: number; critical: number },
  ) {
    if (value <= critical) return 'critical';
    if (value <= warning) return 'warning';
    return 'ok';
  }
  // 1. Training Demand
  async getMostDemandedTrainings(limit = 10) {
    return this.prisma.actionFormation.findMany({
      include: { _count: { select: { participants: true } }, theme: true },
      orderBy: { participants: { _count: 'desc' } },
      take: limit,
    });
  }

  async getTopDomainsThemes() {
    // Aggregate participants by domain and theme
    const results = await this.prisma.$queryRaw<
      {
        theme_id: number;
        libelle_theme: string;
        domaine_id: number;
        libelle_domaine: string;
        participants_count: bigint; // Prisma returns BigInt for COUNT(*)
      }[]
    >`
      SELECT 
        t.theme_id, 
        t.libelle_theme, 
        d.domaine_id, 
        d.libelle_domaine,
        COUNT(afp.participant_id) AS participants_count
      FROM "Theme" t
      JOIN "Domaine" d ON t.domaine_id = d.domaine_id
      JOIN "ActionFormation" af ON af.theme_id = t.theme_id
      JOIN "ActionFormationParticipant" afp ON afp.action_id = af.action_id
      GROUP BY t.theme_id, t.libelle_theme, d.domaine_id, d.libelle_domaine
      ORDER BY participants_count DESC
      LIMIT 10;
    `;

    return results.map((r) => ({
      theme: r.libelle_theme,
      domain: r.libelle_domaine,
      participants: Number(r.participants_count), // Convert BigInt to Number
    }));
  }

  async getMonthlyTrainingTrends() {
    const rawResults = await this.prisma.$queryRaw<
      {
        month: Date;
        trainings_count: bigint;
      }[]
    >`
      SELECT DATE_TRUNC('month', "date_debut") AS month,
             COUNT(*) AS trainings_count
      FROM "ActionFormation"
      GROUP BY month
      ORDER BY month;
    `;
    return rawResults.map((result) => ({
      month: result.month,
      trainings_count: Number(result.trainings_count),
    }));
  }

  // 2. Revenue Reports
  async getRevenuePerTraining() {
    const list = await this.prisma.actionFormation.findMany({
      include: { _count: { select: { participants: true } }, theme: true },
    });
    return list.map((a) => ({
      action_id: a.action_id,
      title: a.theme.libelle_theme,
      participants: a._count.participants,
      unit_price: a.prix_unitaire,
      revenue: (a.prix_unitaire ?? 0) * a._count.participants,
    }));
  }

  async getRevenueByMonth() {
    return this.prisma.$queryRaw<
      {
        month: Date;
        revenue: number;
      }[]
    >`
      SELECT DATE_TRUNC('month', af."date_debut") AS month,
             SUM(af."prix_unitaire" * cnt.participants) AS revenue
      FROM "ActionFormation" af
      JOIN (
        SELECT "action_id", COUNT(*) AS participants
        FROM "ActionFormationParticipant"
        GROUP BY "action_id"
      ) cnt ON cnt."action_id" = af."action_id"
      GROUP BY month
      ORDER BY month;
    `;
  }

  async getRevenueByFormateur() {
    // Earnings per formateur by session rate
    const records = await this.prisma.actionFormationFormateur.findMany({
      include: {
        formateur: {
          select: { tarif_heure: true, tarif_jour: true, tarif_seance: true },
        }, // Added tarif_seance here
        action: { include: { seances: true } },
      },
    });
    // Sum earnings by formateur
    const map = new Map<string, number>();
    records.forEach((rec) => {
      const id = rec.formateur_id;
      const seanceCount = rec.action.seances.length;
      // assume tarif_seance if set, else tarif_heure * duree_heures or tarif_jour * duree_jours
      const t = rec.formateur;
      let earn = 0;
      if (t.tarif_seance) earn = t.tarif_seance * seanceCount;
      else if (t.tarif_heure && rec.action.duree_heures)
        earn = t.tarif_heure * rec.action.duree_heures * seanceCount; // This line might need adjustment if duree_heures is per seance vs total
      else if (t.tarif_jour && rec.action.duree_jours)
        earn = t.tarif_jour * rec.action.duree_jours; // This line might need adjustment if duree_jours is per seance vs total
      const prev = map.get(id) || 0;
      map.set(id, prev + earn);
    });

    // Define the type for the objects in the result array
    type FormateurRevenue = {
      formateur_id: string;
      name: string;
      revenue: number;
    };

    const result: FormateurRevenue[] = []; // Explicitly type the result array

    for (const [formateur_id, revenue] of map.entries()) {
      const user = await this.prisma.user.findUnique({
        where: { user_id: formateur_id },
        select: { nom: true, prenom: true },
      });
      if (user) {
        // Add a check to ensure user is not null
        result.push({
          formateur_id,
          name: `${user.prenom} ${user.nom}`,
          revenue,
        });
      }
    }
    return result;
  }

  // 3. Attendance Analytics
  async getAttendanceRates() {
    // Attendance rate per training
    const raw = await this.prisma.$queryRaw<
      {
        action_id: number;
        present: bigint;
        total: bigint;
      }[]
    >`
      SELECT s."action_id",
             SUM(CASE WHEN p.status = 'PRESENT' THEN 1 ELSE 0 END) AS present,
             COUNT(*) AS total
      FROM "Presence" p
      JOIN "Seance" s ON p.seance_id = s.seance_id
      GROUP BY s."action_id";
    `;
    return raw.map((r) => ({
      action_id: r.action_id,
      attendance_rate: Number(r.present) / Number(r.total),
    }));
  }

  async getTopPunctualTrainings(limit = 10) {
    const rates = await this.getAttendanceRates();
    rates.sort((a, b) => b.attendance_rate - a.attendance_rate);
    return rates.slice(0, limit);
  }

  async getFrequentAbsentees(limit = 10) {
    const raw = await this.prisma.$queryRaw<
      {
        participant_id: string;
        absences: bigint;
      }[]
    >`
      SELECT p.participant_id,
             SUM(CASE WHEN p.status = 'ABSENT' THEN 1 ELSE 0 END) AS absences
      FROM "Presence" p
      GROUP BY p.participant_id
      ORDER BY absences DESC
      LIMIT ${limit};
    `;
    return raw.map((r) => ({
      participant_id: r.participant_id,
      absences: Number(r.absences),
    }));
  }

  // 4. Trainer Performance
  async getTrainerPerformance(limit = 10): Promise<TrainerPerformanceEntry[]> {
    // Count trainings, avg attendance, total revenue contributed
    const trainingsByFormateur =
      await this.prisma.actionFormationFormateur.groupBy({
        by: ['formateur_id'],
        _count: {
          action_id: true, // Corrected: Count 'action_id' directly
        },
      });

    const result: TrainerPerformanceEntry[] = [];

    for (const t of trainingsByFormateur) {
      // Fetch revenue for this specific formateur to optimize
      const formateurRevenueData = await this.getRevenueByFormateur(); // This fetches all, consider optimizing if it becomes a bottleneck
      const revenueObj = formateurRevenueData.find(
        (r) => r.formateur_id === t.formateur_id,
      );

      // Note: getAttendanceRates() is called in each iteration.
      // If it's expensive, consider fetching all rates once outside the loop and then filtering/mapping.
      // const att = await this.getAttendanceRates();
      // For now, I'll assume it's acceptable or will be optimized separately.

      const perfEntry: TrainerPerformanceEntry = {
        formateur_id: t.formateur_id,
        trainingsCount: t._count.action_id, // Access the count correctly
        revenue: revenueObj?.revenue || 0,
      };
      result.push(perfEntry);
    }

    // Sort by trainingsCount. You might want to sort by revenue or a combined score later.
    result.sort((a, b) => b.trainingsCount - a.trainingsCount);
    return result.slice(0, limit);
  }

 

  async getDropoutRates() {
    const raw = await this.prisma.$queryRaw<
      {
        action_id: number;
        expected: number;
        actual: bigint;
      }[]
    >`
      SELECT af."action_id",
             af."nb_participants_prevu" AS expected,
             cnt.participants AS actual
      FROM "ActionFormation" af
      LEFT JOIN (
        SELECT "action_id", COUNT(*) AS participants
        FROM "ActionFormationParticipant"
        GROUP BY "action_id"
      ) cnt ON cnt."action_id" = af."action_id";
    `;
    return raw.map((r) => ({
      action_id: r.action_id,
      dropout_rate: (r.expected - Number(r.actual)) / r.expected,
    }));
  }

  // 6. Certification Report
  async getCertificationStats() {
    const total = await this.prisma.participant.count();
    const issued = await this.prisma.attestation.count();
    return {
      totalParticipants: total,
      certificatesIssued: issued,
      rate: issued / total,
    };
  }

  async getCertificationEfficiency() {
    // avg time from training end to issue
    const raw = await this.prisma.$queryRaw<{ avg_time: number }[]>`
      SELECT AVG(EXTRACT(EPOCH FROM ("date_emission" - a."date_fin")) / 86400) AS avg_time
      FROM "Attestation" at
      JOIN "ActionFormation" a ON at."action_id" = a."action_id";
    `;
    return { averageDaysToIssue: raw[0]?.avg_time || 0 };
  }

   // 5. Participant Satisfaction & Engagement
   async getSurveyResponseRates(surveyId: string) {
    const totalQuestions = await this.prisma.question.count({
      where: { surveyId },
    });
    const totalResponses = await this.prisma.response.count({
      where: { surveyId },
    });
    const totalParticipants = await this.prisma.participant.count();
    console.log(totalQuestions, totalResponses, totalParticipants);
    return {
      surveyId,
      responseRate:
        Number(totalResponses) /
        (Number(totalQuestions) * Number(totalParticipants)),
    };
  }

  async getAverageSatisfactionPerTraining(): Promise<
    AverageSatisfactionEntry[]
  > {
    const surveys = await this.prisma.survey.findMany({});
    const results: AverageSatisfactionEntry[] = [];

    for (const s of surveys) {
      const answers = await this.prisma.answer.findMany({
        where: { response: { surveyId: s.id } },
      });

      const scores = answers
        .map((a) => {
          // Safely handle Answer.content which is JsonValue
          if (typeof a.content === 'string') {
            return parseFloat(a.content);
          } else if (typeof a.content === 'number') {
            return a.content; // If it's already a number, use it directly
          }
          return NaN; // Or some other default for non-string/non-number content
        })
        .filter((score) => !isNaN(score));

      let avg = 0;
      if (scores.length > 0) {
        avg = scores.reduce((sum, current) => sum + current, 0) / scores.length;
      } else {
        avg = 0;
      }

      results.push({
        surveyId: s.id,
        title: s.title, // Assuming Survey model has a title field
        averageScore: avg,
      });
    }
    return results;
  }

  // 7. Training Effectiveness
  // async getTrainingEffectiveness(): Promise<TrainingEffectivenessEntry[]> {
  //   const demands = await this.getMostDemandedTrainings(); // Assumes this returns { action_id: string, _count: { participants: number }, title?: string }[]
  //   const attendance = await this.getAttendanceRates(); // Assumes this returns { action_id: string, attendance_rate: number }[]
  //   const satisfaction = await this.getAverageSatisfactionPerTraining(); // Assumes this returns { surveyId: string, averageScore: number, title?: string }[]

  //   const certStats = await this.prisma.attestation.groupBy({
  //     by: ['action_id'],
  //     _count: {
  //       attestation_id: true // Corrected: Count 'attestation_id' directly
  //     },
  //     // where: { action_id: { in: demands.map(d => d.action_id) } } // Optional: Filter attestations for relevant actions only
  //   });

  //   return demands.map((d) => {
  //     const attendEntry = attendance.find((a) => a.action_id === d.action_id);
  //     // Assuming surveyId in satisfaction maps to action_id.
  //     // If Survey is not directly linked to ActionFormation by action_id, this mapping needs adjustment.
  //     // For example, if Survey is linked via a SurveyResponse which is linked to a Participant who is in an ActionFormation.
  //     // The current `String(d.action_id)` implies surveyId might be a string representation of action_id.
  //     const satEntry = satisfaction.find((s) => s.surveyId === d.action_id); // Assuming d.action_id is the correct key for survey mapping
  //     const certEntry = certStats.find((c) => c.action_id === d.action_id);

  //     return {
  //       action_id: d.action_id,
  //       action_title: d.title, // Include title if available from getMostDemandedTrainings
  //       demand: d._count.participants, // Ensure this path is correct based on getMostDemandedTrainings output
  //       attendanceRate: attendEntry?.attendance_rate ?? 0,
  //       satisfaction: satEntry?.averageScore ?? 0,
  //       certifications: certEntry?._count.attestation_id ?? 0,
  //     };
  //   });
  // }
}

// Interface for the return type of getTrainingEffectiveness
interface TrainingEffectivenessEntry {
  action_id: string; // Assuming action_id is string, adjust if it's number
  action_title?: string; // Optional: Add title for better readability
  demand: number;
  attendanceRate: number;
  satisfaction: number;
  certifications: number;
}
