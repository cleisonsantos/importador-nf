import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotasFiscaisModule } from './notas-fiscais/notas-fiscais.module';

@Module({
  imports: [NotasFiscaisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
