import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotaFiscalService } from './nota-fiscal.service';
import { CreateNotasFiscaiDto } from './dto/create-nota-fiscal.dto';
import { UpdateNotasFiscaiDto } from './dto/update-nota-fiscal.dto';

@Controller('notas-fiscais')
export class NotaFiscalController {
  constructor(private readonly NotaFiscalService: NotaFiscalService) {}

  @Post()
  create(@Body() createNotasFiscaiDto: CreateNotasFiscaiDto) {
    return this.NotaFiscalService.create(createNotasFiscaiDto);
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
  update(@Param('id') id: string, @Body() updateNotasFiscaiDto: UpdateNotasFiscaiDto) {
    return this.NotaFiscalService.update(+id, updateNotasFiscaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.NotaFiscalService.remove(+id);
  }
}
