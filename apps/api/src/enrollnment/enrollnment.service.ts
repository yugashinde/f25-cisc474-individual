import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EnrollnmentService {
  constructor(private prisma: PrismaService) {}

  // Get all enrollnment
  async findAll() {
    return this.prisma.enrollnment.findMany()
  }

  // Get a single course by enrollnment
  async findOne(id: number) {
    return this.prisma.enrollnment.findUnique({
      where: { id },
    });
  }
}