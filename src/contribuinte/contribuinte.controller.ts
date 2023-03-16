import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContribuinteService } from './contribuinte.service';
import { CreateContribuinteDto } from './dto/create-contribuinte.dto';
import { UpdateContribuinteDto } from './dto/update-contribuinte.dto';

@Controller('contribuinte')
export class ContribuinteController {
  constructor(private readonly contribuinteService: ContribuinteService) {}

  @Post()
  create(@Body() createContribuinteDto: CreateContribuinteDto) {
    return this.contribuinteService.create(createContribuinteDto);
  }

  @Get()
  findAll() {
    return this.contribuinteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contribuinteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContribuinteDto: UpdateContribuinteDto) {
    return this.contribuinteService.update(+id, updateContribuinteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contribuinteService.remove(+id);
  }
}
