import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { ClerkService } from './clerk/clerk.service';
import { UserModule } from './user/user.module';
import { FormateurModule } from './formateur/formateur.module';
import { ClerkModule } from './clerk/clerk.module';

@Module({
  imports: [RoleModule, UserModule, FormateurModule, ClerkModule],
  controllers: [AppController],
  providers: [AppService, ClerkService],
})
export class AppModule {}
