import { Module } from '@nestjs/common';
import { ActionFfService } from './action-ff.service';
import { ActionFfController } from './action-ff.controller';

@Module({
  controllers: [ActionFfController],
  providers: [ActionFfService],
})
export class ActionFfModule {}
