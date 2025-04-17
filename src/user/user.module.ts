import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClerkService } from 'src/clerk/clerk.service';

@Module({
  controllers: [UserController],
  providers: [UserService, ClerkService],
})
export class UserModule {}
