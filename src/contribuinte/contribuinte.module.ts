import { Module } from '@nestjs/common';
import { ContribuinteService } from './contribuinte.service';
import { ContribuinteController } from './contribuinte.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ContribuinteController],
  providers: [ContribuinteService]
})
export class ContribuinteModule {}
