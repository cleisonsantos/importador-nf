import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotasFiscaisModule } from './notas-fiscais/notas-fiscais.module';
import { ContribuinteModule } from './contribuinte/contribuinte.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    NotasFiscaisModule,
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
