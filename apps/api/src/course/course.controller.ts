import { Controller, Get, Post, Body, Patch,Query,  Param, Delete, UseGuards } from '@nestjs/common';

import { CourseService } from './course.service';
import { CourseCreateIn, CourseUpdateIn } from '@repo/api';
import { JwtAuthGuard } from '../auth/jwt.strategy.guard';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('courses') 
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createCourseDto: CourseCreateIn) {
    return this.courseService.create(createCourseDto);
  }

  
  @Get()
  async findAll(@Query('ownerId') ownerId?: string) {
    if (ownerId) {
      return await this.courseService.findByOwner(ownerId);
    }
    return await this.courseService.findAll();
  }

  @Get(':courseId')
  async findOne(@Param('courseId') courseId: string) {
    return await this.courseService.findOne(courseId);
  }


  @Patch(':courseId')
  async update(
    @Param('courseId') courseId: string,
    @Body() updateCourseDto: CourseUpdateIn,
  ) {
    return this.courseService.update(courseId, updateCourseDto);
  }
 

  @Delete(':courseId')
  async remove(@Param('icourseId') courseId: string) {
    return this.courseService.remove(courseId);
  }
}
