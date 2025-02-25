import { Module } from '@nestjs/common';
import { FormateurService } from './formateur.service';
import { FormateurController } from './formateur.controller';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  controllers: [FormateurController],
  providers: [FormateurService, PrismaService, CloudinaryService],
})
export class FormateurModule {}
