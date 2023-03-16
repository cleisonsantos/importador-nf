import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotasFiscaisModule } from './notas-fiscais/notas-fiscais.module';
import { ContribuinteModule } from './contribuinte/contribuinte.module';

@Module({
  imports: [NotasFiscaisModule, ContribuinteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
