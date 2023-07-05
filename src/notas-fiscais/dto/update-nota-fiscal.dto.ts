import { PartialType } from '@nestjs/mapped-types';
import { CreateNotaFiscalDto } from './create-nota-fiscal.dto';

export class UpdateNotasFiscaiDto extends PartialType(CreateNotaFiscalDto) {}
