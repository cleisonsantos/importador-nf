import { Module } from '@nestjs/common';
import { ContribuinteService } from './contribuinte.service';
import { ContribuinteController } from './contribuinte.controller';

@Module({
  controllers: [ContribuinteController],
  providers: [ContribuinteService]
})
export class ContribuinteModule {}
