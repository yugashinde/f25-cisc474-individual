import { Test, TestingModule } from '@nestjs/testing';
import { EnrollnmentController } from './enrollnment.controller';
import { EnrollnmentService } from './enrollnment.service';

describe('EnrollnmentController', () => {
  let controller: EnrollnmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnrollnmentController],
      providers: [EnrollnmentService],
    }).compile();

    controller = module.get<EnrollnmentController>(EnrollnmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
