import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { NotaFiscalService } from './nota-fiscal.service';
import { CreateNotaFiscalDto } from './dto/create-nota-fiscal.dto';
import { UpdateNotasFiscaiDto } from './dto/update-nota-fiscal.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { writeFile } from 'fs/promises';
import { join } from 'path';

@Controller('notas-fiscais')
export class NotaFiscalController {
  constructor(private readonly NotaFiscalService: NotaFiscalService) {}

  @Post()
  create(@Body() CreateNotaFiscalDto: CreateNotaFiscalDto) {
    return this.NotaFiscalService.create(CreateNotaFiscalDto);
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('upload')
  async upload(@UploadedFile() file: Express.Multer.File) {
    const data = await writeFile(
      join(
        __dirname,
        '..',
        '..',
        'storage',
        'notas-fiscais',
        `${crypto.randomUUID() + file.originalname.slice(-4)}`,
      ),
      file.buffer,
    );
    return {
      message: 'Arquivo enviado com sucesso',
      data,
    };
  }

  @Get()
  findAll() {
    return this.NotaFiscalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.NotaFiscalService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNotasFiscaiDto: UpdateNotasFiscaiDto,
  ) {
    return this.NotaFiscalService.update(+id, updateNotasFiscaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.NotaFiscalService.remove(+id);
  }
}
