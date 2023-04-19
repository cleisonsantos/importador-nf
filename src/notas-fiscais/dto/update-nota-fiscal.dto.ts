import { PartialType } from '@nestjs/mapped-types';
import { CreateNotaFiscaLDto } from './create-nota-fiscal.dto';

export class UpdateNotasFiscaiDto extends PartialType(CreateNotaFiscalDto) {}
