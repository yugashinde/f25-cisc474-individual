import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EnrollmentService {
    constructor(private prisma: PrismaService) {}
    

  // Get all enrollnment
  async findAll() {
    return this.prisma.enrollment.findMany()
  }

  // Get a single course by enrollment
  async findOne(id: number) {
    return this.prisma.enrollment.findUnique({
      where: { id },
    });
  }

}



  
