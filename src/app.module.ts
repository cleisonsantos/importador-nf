import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotaFiscalModule } from './notas-fiscais/nota-fiscal.module';
import { ContribuinteModule } from './contribuinte/contribuinte.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    NotaFiscalModule,
    ContribuinteModule,
    BullModule.forRoot({
      redis: {
        host: process.env['REDIS_HOST'],
        port: +process.env['REDIS_PORT'],
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
