import { Module } from '@nestjs/common';
import { GradecontrollerService } from './gradecontroller.service';
import { GradecontrollerController } from './gradecontroller.controller';

@Module({
  controllers: [GradecontrollerController],
  providers: [GradecontrollerService],
})
export class GradecontrollerModule {}
