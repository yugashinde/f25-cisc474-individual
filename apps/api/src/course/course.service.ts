import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  // Get all courses
  async findAll() {
    return this.prisma.course.findMany()
  }

  // Get a single course by courseId
  async findOne(courseId: number) {
    return this.prisma.course.findUnique({
      where: { courseId },
    });
  }
}