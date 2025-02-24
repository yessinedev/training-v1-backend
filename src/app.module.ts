import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { ClerkService } from './clerk/clerk/clerk.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [RoleModule, UserModule],
  controllers: [AppController],
  providers: [AppService, ClerkService],
})
export class AppModule {}
