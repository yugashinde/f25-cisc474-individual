import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from '@repo/database';

describe('UserController', () => {
  let controller: UserController;
  let service : UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should return an array of users', async () => {
    const result: User[] = [
      { id: '1', name: 'Ada Bart', email: '', emailVerified: null , role: 'student'},
    ];
    jest.spyOn(service, 'findAll').mockResolvedValueOnce(result);

    expect(await service.findAll()).toBe(result);
  });

});