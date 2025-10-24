import { Module } from '@nestjs/common';
import { ProfessorProfileService } from './professor-profile.service';
import { ProfessorProfileController } from './professor-profile.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ProfessorProfileController],
  providers: [ProfessorProfileService,PrismaService],
})
export class ProfessorProfileModule {}
