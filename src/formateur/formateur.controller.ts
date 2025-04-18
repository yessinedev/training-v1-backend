import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UploadedFiles,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import {
  FileFieldsInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { FormateurService } from './formateur.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { CreateFormateurDto } from './dto/create-formateur.dto';
import { UpdateFormateurDto } from './dto/update-formateur.dto';

@Controller('formateurs')
export class FormateurController {
  constructor(
    private readonly formateurService: FormateurService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Get()
  async findAll() {
    return this.formateurService.findAll();
  }

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'CV', maxCount: 1 },
        { name: 'BADGE', maxCount: 1 },
        { name: 'FEUILLE_ELARGEMENT', maxCount: 1 },
      ],
      {
        fileFilter: (_, file, callback) => {
          if (file.mimetype.match(/\/(pdf|jpeg|png)$/)) {
            callback(null, true);
          } else {
            callback(new BadRequestException('Invalid file type'), false);
          }
        },
      },
    ),
  )
  async create(
    @Body() createDto: CreateFormateurDto,
    @UploadedFiles() files: {
      CV: Express.Multer.File[];
      BADGE?: Express.Multer.File[];
      // FEUILLE_ELARGEMENT?: Express.Multer.File[];
    },
  ) {
    const allFiles: Express.Multer.File[] = [];
    if (files.CV) allFiles.push(...files.CV);
    if (files.BADGE) allFiles.push(...files.BADGE);
    return this.formateurService.create(
      {
        ...createDto,
      },
      allFiles,
    );
  }

  @Put(':id')
  @UseInterceptors(FilesInterceptor('files', 2))
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateFormateurDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    const [cvFile, badgeFile] = files || [];
    const uploads = {};

    if (cvFile) {
      uploads['cv_path'] = await this.cloudinaryService.uploadFile(
        cvFile.buffer,
        'formateurs/cv',
        cvFile.mimetype,
      );
    }

    if (badgeFile) {
      uploads['badge_path'] = await this.cloudinaryService.uploadFile(
        badgeFile.buffer,
        'formateurs/badges',
        badgeFile.mimetype,
      );
    }

    return this.formateurService.update(id, {
      ...updateDto,
      ...uploads,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.formateurService.remove(id);
  }
}
