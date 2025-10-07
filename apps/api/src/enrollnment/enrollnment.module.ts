import { Module } from '@nestjs/common';
import { EnrollnmentService } from './enrollnment.service';
import { EnrollnmentController } from './enrollnment.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EnrollnmentController],
  providers: [EnrollnmentService,PrismaService],
})
export class EnrollnmentModule {}
