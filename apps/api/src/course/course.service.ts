import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CourseCreateIn, CourseUpdateIn, CourseOut } from '@repo/api';
import { CurrentUser } from 'src/auth/current-user.decorator';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  // CREATE a course
  async create(createCourseDto: CourseCreateIn) {
    const course = await this.prisma.course.create({
      data: {
        courseId: createCourseDto.ownerId,
        title: createCourseDto.name,
        description: createCourseDto.description,
        department: createCourseDto.department ?? '',
        credits: createCourseDto.credits ?? 0,
        owner: { connect: { id: createCourseDto.ownerId } },
        
      professor: { connect: { id: createCourseDto.ownerId } }, 
      },
    });
    return {
      courseId: course.courseId,
      title: course.title,
      description: course.description,
      department: course.department,
      credits: course.credits,
      ownerId: course.ownerId,
      professorId: course.professorId,
    } satisfies CourseOut;
  }
  // FIND ALL courses
  findAll() {
    return this.prisma.course.findMany();
  }

  // FIND ONE course by ID
  async findOne(courseId: string) {
    const course = await this.prisma.course.findUnique({
      where: { courseId },
    });
    if (!course) throw new NotFoundException('Course not found');

    return {
      courseId: course.courseId,
      title: course.title,
      description: course.description,
      department: course.department,
      credits: course.credits,
      ownerId: course.ownerId,
      professorId: course.professorId,
    } satisfies CourseOut;
  }

  // FIND courses by ownerId
  async findByOwner(ownerId: string) {
    const courses = await this.prisma.course.findMany({
      where: { ownerId },
    });

    return courses.map((course) => ({
      courseId: course.courseId,
      title: course.title,
      description: course.description,
      department: course.department,
      credits: course.credits,
      ownerId: course.ownerId,
      professorId: course.professorId,
    } satisfies CourseOut));
  }

  // UPDATE a course
  async update(courseId: string, updateCourseDto: CourseUpdateIn) {
    const course = await this.prisma.course.update({
      where: { courseId },
      data: {
        title: updateCourseDto.name,
        description: updateCourseDto.description,
        department: updateCourseDto.department,
        credits: updateCourseDto.credits,
      },
    });

    return {
      courseId: course.courseId,
      title: course.title,
      description: course.description,
      department: course.department,
      credits: course.credits,
      ownerId: course.ownerId,
      professorId: course.professorId,
    } satisfies CourseOut;
  }

  async remove(courseId: string) {
    await this.prisma.course.delete({
      where: { courseId },
    });
    return { message: 'Course deleted successfully' };
  }
}
