import { Test, TestingModule } from '@nestjs/testing';
import { ProfcontrollerService } from './profcontroller.service';

describe('ProfcontrollerService', () => {
  let service: ProfcontrollerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfcontrollerService],
    }).compile();

    service = module.get<ProfcontrollerService>(ProfcontrollerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
