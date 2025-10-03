import { Module } from '@nestjs/common';
import { ProfcontrollerService } from './profcontroller.service';
import { ProfcontrollerController } from './profcontroller.controller';

@Module({
  controllers: [ProfcontrollerController],
  providers: [ProfcontrollerService],
})
export class ProfcontrollerModule {}
