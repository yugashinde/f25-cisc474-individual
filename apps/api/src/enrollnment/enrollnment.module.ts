import { Module } from '@nestjs/common';
import { EnrollnmentService } from './enrollnment.service';
import { EnrollnmentController } from './enrollnment.controller';

@Module({
  controllers: [EnrollnmentController],
  providers: [EnrollnmentService],
})
export class EnrollnmentModule {}
