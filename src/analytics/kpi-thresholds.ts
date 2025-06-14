// src/analytics/kpi-thresholds.ts
export const KpiThresholds = {
    // Attendance metrics
    attendanceRate: {
      warning: 0.75,   // <75% → Warning
      critical: 0.5,   // <50% → Critical
    },
    topPunctualRate: {
      warning: 0.90,   // <90% → Warning
      critical: 0.80,  // <80% → Critical
    },
    frequentAbsences: {
      warning: 10,     // >10 absences → Warning
      critical: 20,    // >20 absences → Critical
    },
  
    // Satisfaction & engagement
    satisfactionScore: {
      warning: 3.5,    // <3.5/5 → Warning
      critical: 2.5,   // <2.5/5 → Critical
    },
    surveyResponseRate: {
      warning: 0.6,    // <60% → Warning
      critical: 0.4,   // <40% → Critical
    },
    dropoutRate: {
      warning: 0.2,    // >20% → Warning
      critical: 0.35,  // >35% → Critical
    },
  
    // Demand & growth
    trainingDemandCount: {
      warning: 20,     // <20 participants → Warning
      critical: 10,    // <10 participants → Critical
    },
    monthlyTrainingGrowth: {
      warning: -0.05,  // <-5% month-over-month → Warning
      critical: -0.15, // <-15% month-over-month → Critical
    },
  
    // Revenue metrics
    revenuePerTraining: {
      warning: 1000,   // <€1k → Warning
      critical: 500,   // <€500 → Critical
    },
    revenueByMonth: {
      warning: 5000,   // <€5k → Warning
      critical: 2000,  // <€2k → Critical
    },
    revenueByFormateur: {
      warning: 2000,   // <€2k → Warning
      critical: 1000,  // <€1k → Critical
    },
  
    // Trainer performance
    trainingsPerTrainer: {
      warning: 2,      // <2 trainings → Warning
      critical: 1,     // <1 training → Critical
    },
    trainerRevenueContribution: {
      warning: 1500,   // <€1.5k → Warning
      critical: 800,   // <€800 → Critical
    },
  
    // Certification outcomes
    certificationRate: {
      warning: 0.8,    // <80% → Warning
      critical: 0.6,   // <60% → Critical
    },
    averageDaysToIssue: {
      warning: 7,      // >7 days → Warning
      critical: 14,    // >14 days → Critical
    },
  
    // Overall effectiveness (composite)
    overallEffectiveness: {
      warning: 0.7,    // <70% composite score → Warning
      critical: 0.5,   // <50% composite score → Critical
    },
  };
  