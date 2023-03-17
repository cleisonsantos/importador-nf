import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContribuinteDto } from './dto/create-contribuinte.dto';
import { UpdateContribuinteDto } from './dto/update-contribuinte.dto';

@Injectable()
export class ContribuinteService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    cnpj,
    inscricao_estadual,
    nome,
    numero_regime_especial,
    cnpj_centro_distribuicao,
    inscricao_estadual_centro_distribuicao,
  }: CreateContribuinteDto) {
    return await this.prisma.contribuinte.create({
      data: {
        cnpj,
        inscricao_estadual,
        nome,
        numero_regime_especial,
        cnpj_centro_distribuicao,
        inscricao_estadual_centro_distribuicao,
      },
      select: {
        id: true,
        nome: true,
      },
    });
  }

  findAll() {
    return this.prisma.contribuinte.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} contribuinte`;
  }

  update(id: number, updateContribuinteDto: UpdateContribuinteDto) {
    return `This action updates a #${id} contribuinte`;
  }

  remove(id: number) {
    return `This action removes a #${id} contribuinte`;
  }
}
