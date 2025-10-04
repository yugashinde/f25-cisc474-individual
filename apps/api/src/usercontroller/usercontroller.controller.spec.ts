import { Test, TestingModule } from '@nestjs/testing';
import { UsercontrollerController } from './usercontroller.controller';
import { UsercontrollerService } from './usercontroller.service';

describe('UsercontrollerController', () => {
  let controller: UsercontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsercontrollerController],
      providers: [UsercontrollerService],
    }).compile();

    controller = module.get<UsercontrollerController>(UsercontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
