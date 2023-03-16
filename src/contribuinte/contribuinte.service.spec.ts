import { Test, TestingModule } from '@nestjs/testing';
import { ContribuinteService } from './contribuinte.service';

describe('ContribuinteService', () => {
  let service: ContribuinteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContribuinteService],
    }).compile();

    service = module.get<ContribuinteService>(ContribuinteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
