import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GradeService {
    constructor(private prisma: PrismaService) {}

    // Get all grades
  async findAll() {
    return this.prisma.grade.findMany()
  }

  // Get a single grade
  async findOne(id: number) {
    return this.prisma.grade.findUnique({
      where: { id },
    });
  }
}
