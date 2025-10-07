import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProfessorService {
    constructor(private prisma: PrismaService) {}

    // Get all grades
  async findAll() {
    return this.prisma.professor.findMany()
  }

  // Get a single grade
  async findOne(id: number) {
    return this.prisma.professor.findUnique({
      where: { id },
    });
  }
}
