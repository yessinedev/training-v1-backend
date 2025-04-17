import { Module } from '@nestjs/common';
import { FormationService } from './formation.service';
import { FormationController } from './formation.controller';
import { ActionFfService } from 'src/action-ff/action-ff.service';
import { SeanceService } from 'src/seance/seance.service';

@Module({
  controllers: [FormationController],
  providers: [FormationService, ActionFfService, SeanceService],
})
export class FormationModule {}
