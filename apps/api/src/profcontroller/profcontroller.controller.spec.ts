import { Test, TestingModule } from '@nestjs/testing';
import { ProfcontrollerController } from './profcontroller.controller';
import { ProfcontrollerService } from './profcontroller.service';

describe('ProfcontrollerController', () => {
  let controller: ProfcontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfcontrollerController],
      providers: [ProfcontrollerService],
    }).compile();

    controller = module.get<ProfcontrollerController>(ProfcontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
