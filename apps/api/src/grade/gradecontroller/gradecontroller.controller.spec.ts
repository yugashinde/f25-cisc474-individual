import { Test, TestingModule } from '@nestjs/testing';
import { GradecontrollerController } from './gradecontroller.controller';
import { GradecontrollerService } from './gradecontroller.service';

describe('GradecontrollerController', () => {
  let controller: GradecontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GradecontrollerController],
      providers: [GradecontrollerService],
    }).compile();

    controller = module.get<GradecontrollerController>(GradecontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
