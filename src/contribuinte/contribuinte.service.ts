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

  async findAll() {
    return this.prisma.contribuinte.findMany();
  }

  async findOne(id: number) {
    return this.prisma.contribuinte.findUnique({ where: { id } });
  }

  async update(id: number, updateContribuinteDto: UpdateContribuinteDto) {
    return `This action updates a #${id} contribuinte`;
  }

  async remove(id: number) {
    try {
      return await this.prisma.contribuinte.delete({
        where: { id },
        select: { id: true, nome: true },
      });
    } catch (error) {
      console.error(error.meta);
      return false;
    }
  }
}
