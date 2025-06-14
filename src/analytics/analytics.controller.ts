import { Controller, Get, Query, Param } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('/analytics')
export class AnalyticsController {
  constructor(private analytics: AnalyticsService) {}

  // Training Demand
  @Get('demand/trainings') getMostDemanded(@Query('limit') limit: string) {
    return this.analytics.getMostDemandedTrainings(+limit || 10);
  }
  @Get('demand/domains-themes') getTopDomainsThemes() {
    return this.analytics.getTopDomainsThemes();
  }
  @Get('demand/monthly') getMonthlyTrends() {
    return this.analytics.getMonthlyTrainingTrends();
  }

  // Revenue
  @Get('revenue/trainings') getRevenuePerTraining() {
    return this.analytics.getRevenuePerTraining();
  }
  @Get('revenue/monthly') getRevenueByMonth() {
    return this.analytics.getRevenueByMonth();
  }
  @Get('revenue/formateurs') getRevenueByFormateur() {
    return this.analytics.getRevenueByFormateur();
  }

  // Attendance
  @Get('attendance/rates') getAttendanceRates() {
    return this.analytics.getAttendanceRates();
  }
  @Get('attendance/top-punctual') getTopPunctual() {
    return this.analytics.getTopPunctualTrainings();
  }
  @Get('attendance/frequent-absentees') 
  getFrequentAbsentees(@Query('limit') limit: string) {
    return this.analytics.getFrequentAbsentees(+limit || 10);
  }

  // Trainer Performance
  @Get('trainer/performance') 
  getTrainerPerformance() {
    return this.analytics.getTrainerPerformance();
  }

 

  @Get('training/dropout-rates') getDropoutRates() {
    return this.analytics.getDropoutRates();
  }

  // Certification
  @Get('certification/stats') getCertificationStats() {
    return this.analytics.getCertificationStats();
  }
  @Get('certification/efficiency') getCertificationEfficiency() {
    return this.analytics.getCertificationEfficiency();
  }

   // Satisfaction & Engagement
  // @Get('survey/response-rate/:surveyId') getSurveyResponseRate(@Param('surveyId') id: string) {
  //   return this.analytics.getSurveyResponseRates(id);
  // }
  // @Get('survey/average-satisfaction') getAvgSatisfaction() {
  //   return this.analytics.getAverageSatisfactionPerTraining();
  // }

  // Training Effectiveness
  // @Get('training/effectiveness') getTrainingEffectiveness() {
  //   return this.analytics.getTrainingEffectiveness();
  // }
}