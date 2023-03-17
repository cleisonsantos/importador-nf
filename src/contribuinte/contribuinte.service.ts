import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContribuinteDto } from './dto/create-contribuinte.dto';
import { UpdateContribuinteDto } from './dto/update-contribuinte.dto';

@Injectable()
export class ContribuinteService {
  constructor(private prisma: PrismaService) {}
  create(createContribuinteDto: CreateContribuinteDto) {
    return createContribuinteDto;
  }

  findAll() {
    return `This action returns all contribuinte`;
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
