import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { ClerkService } from './clerk/clerk.service';
import { UserModule } from './user/user.module';
import { FormateurModule } from './formateur/formateur.module';

@Module({
  imports: [RoleModule, UserModule, FormateurModule],
  controllers: [AppController],
  providers: [AppService, ClerkService],
})
export class AppModule {}
