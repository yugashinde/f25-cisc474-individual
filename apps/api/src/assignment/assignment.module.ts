import { Module } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { AssignmentController } from './assignment.controller';
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [AssignmentController],
  providers: [AssignmentService,PrismaService],
})
export class AssignmentModule {}
