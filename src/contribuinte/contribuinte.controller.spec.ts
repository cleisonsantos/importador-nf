import { Test, TestingModule } from '@nestjs/testing';
import { ContribuinteController } from './contribuinte.controller';
import { ContribuinteService } from './contribuinte.service';

describe('ContribuinteController', () => {
  let controller: ContribuinteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContribuinteController],
      providers: [ContribuinteService],
    }).compile();

    controller = module.get<ContribuinteController>(ContribuinteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
