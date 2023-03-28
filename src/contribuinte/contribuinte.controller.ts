import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ContribuinteService } from './contribuinte.service';
import { CreateContribuinteDto } from './dto/create-contribuinte.dto';
import { UpdateContribuinteDto } from './dto/update-contribuinte.dto';

@Controller('contribuinte')
export class ContribuinteController {
  constructor(private readonly contribuinteService: ContribuinteService) {}

  @Post()
  async create(
    @Body()
    {
      cnpj,
      inscricao_estadual,
      nome,
      numero_regime_especial,
      cnpj_centro_distribuicao,
      inscricao_estadual_centro_distribuicao,
    }: CreateContribuinteDto,
  ) {
    const contribuinte = await this.contribuinteService.create({
      cnpj,
      inscricao_estadual,
      nome,
      numero_regime_especial,
      cnpj_centro_distribuicao,
      inscricao_estadual_centro_distribuicao,
    });
    return contribuinte;
  }

  @Get()
  async findAll(@Res() res: Response) {
    const contruibuintes = await this.contribuinteService.findAll();
    contruibuintes
      ? res.status(200).json({ message: 'Success', data: contruibuintes })
      : res.status(404).json({ message: 'Not found', data: [] });
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const contruibuinte = await this.contribuinteService.findOne(+id);
    contruibuinte
      ? res.status(200).json({ message: 'Success', data: contruibuinte })
      : res.status(404).json({ message: 'Not found', data: {} });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContribuinteDto: UpdateContribuinteDto,
  ) {
    return this.contribuinteService.update(+id, updateContribuinteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const deleted = await this.contribuinteService.remove(+id);
    deleted
      ? res.status(200).json({ message: 'Success', data: deleted })
      : res.status(404).json({ message: 'Not found', data: {} });
  }
}
