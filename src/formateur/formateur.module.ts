import { Module } from '@nestjs/common';
import { FormateurService } from './formateur.service';
import { FormateurController } from './formateur.controller';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FileService } from 'src/file/file.service';
import { UserService } from 'src/user/user.service';
import { ClerkService } from 'src/clerk/clerk.service';

@Module({
  controllers: [FormateurController],
  providers: [FormateurService, CloudinaryService, FileService, UserService, ClerkService],
})
export class FormateurModule {}
