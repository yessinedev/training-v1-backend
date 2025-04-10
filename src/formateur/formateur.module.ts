import { Module } from '@nestjs/common';
import { FormateurService } from './formateur.service';
import { FormateurController } from './formateur.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FileService } from 'src/file/file.service';

@Module({
  controllers: [FormateurController],
  providers: [FormateurService, PrismaService, CloudinaryService, FileService],
})
export class FormateurModule {}
