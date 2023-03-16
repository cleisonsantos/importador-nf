import { Injectable } from '@nestjs/common';
import { CreateContribuinteDto } from './dto/create-contribuinte.dto';
import { UpdateContribuinteDto } from './dto/update-contribuinte.dto';

@Injectable()
export class ContribuinteService {
  create(createContribuinteDto: CreateContribuinteDto) {
    return 'This action adds a new contribuinte';
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
