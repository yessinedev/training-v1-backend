import { Module } from '@nestjs/common';
import { ActionFpService } from './action-fp.service';
import { ActionFpController } from './action-fp.controller';

@Module({
  controllers: [ActionFpController],
  providers: [ActionFpService],
})
export class ActionFpModule {}
