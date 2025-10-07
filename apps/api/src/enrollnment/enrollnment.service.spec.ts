import { Test, TestingModule } from '@nestjs/testing';
import { EnrollnmentService } from './enrollnment.service';

describe('EnrollnmentService', () => {
  let service: EnrollnmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnrollnmentService],
    }).compile();

    service = module.get<EnrollnmentService>(EnrollnmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
