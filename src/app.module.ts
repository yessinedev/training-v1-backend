import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { ClerkService } from './clerk/clerk.service';
import { UserModule } from './user/user.module';
import { FormateurModule } from './formateur/formateur.module';
import { ClerkModule } from './clerk/clerk.module';
import { ParticipantModule } from './participant/participant.module';
import { DomaineModule } from './domaine/domaine.module';
import { ThemeModule } from './theme/theme.module';
import { FormationModule } from './formation/formation.module';
import { ActionFfModule } from './action-ff/action-ff.module';
import { ActionFpModule } from './action-fp/action-fp.module';
import { AttestationModule } from './attestation/attestation.module';
import { FileModule } from './file/file.module';
import { SeanceModule } from './seance/seance.module';
import { PresenceModule } from './presence/presence.module';

@Module({
  imports: [
    RoleModule,
    UserModule,
    FormateurModule,
    ClerkModule,
    ParticipantModule,
    DomaineModule,
    ThemeModule,
    FormationModule,
    ActionFfModule,
    ActionFpModule,
    AttestationModule,
    FileModule,
    SeanceModule,
    PresenceModule,
  ],
  controllers: [AppController],
  providers: [AppService, ClerkService],
})
export class AppModule {}
