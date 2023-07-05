import { Injectable } from '@nestjs/common';
import { CreateNotaFiscalDto } from './dto/create-nota-fiscal.dto';
import { UpdateNotasFiscaiDto } from './dto/update-nota-fiscal.dto';

@Injectable()
export class NotaFiscalService {
  create(createNotasFiscaiDto: CreateNotaFiscalDto) {
    return 'This action adds a new notasFiscai';
  }

  findAll() {
    return `This action returns all NotaFiscal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notasFiscai`;
  }

  update(id: number, updateNotasFiscaiDto: UpdateNotasFiscaiDto) {
    return `This action updates a #${id} notasFiscai`;
  }

  remove(id: number) {
    return `This action removes a #${id} notasFiscai`;
  }
}
