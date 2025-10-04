import { Test, TestingModule } from '@nestjs/testing';
import { UsercontrollerService } from './usercontroller.service';

describe('UsercontrollerService', () => {
  let service: UsercontrollerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsercontrollerService],
    }).compile();

    service = module.get<UsercontrollerService>(UsercontrollerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
