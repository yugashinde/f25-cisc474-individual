import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    // Get all grades
  async findAll() {
    return this.prisma.user.findMany()
  }

  // Get a single grade
  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
}

