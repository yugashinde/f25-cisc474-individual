import { Test, TestingModule } from '@nestjs/testing';
import { ProfessorProfileService } from './professor-profile.service';

describe('ProfessorProfileService', () => {
  let service: ProfessorProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfessorProfileService],
    }).compile();

    service = module.get<ProfessorProfileService>(ProfessorProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
