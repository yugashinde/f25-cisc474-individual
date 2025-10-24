import { Module } from '@nestjs/common';
import { StudentProfileService } from './student-profile.service';
import { StudentProfileController } from './student-profile.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [StudentProfileController],
  providers: [StudentProfileService,PrismaService],
})
export class StudentProfileModule {}
