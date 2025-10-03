import { Test, TestingModule } from '@nestjs/testing';
import { GradecontrollerService } from './gradecontroller.service';

describe('GradecontrollerService', () => {
  let service: GradecontrollerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GradecontrollerService],
    }).compile();

    service = module.get<GradecontrollerService>(GradecontrollerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
