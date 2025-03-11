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
import { FilesInterceptor } from '@nestjs/platform-express';
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
    FilesInterceptor('files', 2, {
      fileFilter: (_, file, callback) => {
        if (file.mimetype.match(/\/(pdf|jpeg|png)$/)) {
          callback(null, true);
        } else {
          callback(new BadRequestException('Invalid file type'), false);
        }
      },
    }),
  )
  async create(
    @Body() createDto: CreateFormateurDto,
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
      console.log(uploads);
    }

    if (badgeFile) {
      uploads['badge_path'] = await this.cloudinaryService.uploadFile(
        badgeFile.buffer,
        'formateurs/badges',
        badgeFile.mimetype,
      );
      console.log(uploads);
    }

    return this.formateurService.create({
      ...createDto,
      ...uploads,
    });
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
