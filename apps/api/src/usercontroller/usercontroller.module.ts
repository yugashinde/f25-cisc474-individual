import { Module } from '@nestjs/common';
import { UsercontrollerService } from './usercontroller.service';
import { UsercontrollerController } from './usercontroller.controller';

@Module({
  controllers: [UsercontrollerController],
  providers: [UsercontrollerService],
})
export class UsercontrollerModule {}
