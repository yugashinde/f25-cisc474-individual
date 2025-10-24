import { Test, TestingModule } from '@nestjs/testing';
import { ProfessorProfileController } from './professor-profile.controller';
import { ProfessorProfileService } from './professor-profile.service';

describe('ProfessorProfileController', () => {
  let controller: ProfessorProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfessorProfileController],
      providers: [ProfessorProfileService],
    }).compile();

    controller = module.get<ProfessorProfileController>(ProfessorProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
