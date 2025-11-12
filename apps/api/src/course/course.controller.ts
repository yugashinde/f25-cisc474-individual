import { Controller, Get, Post, Body, Patch,Query,  Param, Delete, UseGuards } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseCreateIn, CourseUpdateIn } from '@repo/api';
import { JwtAuthGuard } from '../auth/jwt.strategy.guard';
import { AuthGuard } from '@nestjs/passport';
import type { JwtUser } from 'src/auth/jwt.strategy';
import { CurrentUser } from 'src/auth/current-user.decorator';

@UseGuards(AuthGuard('jwt'))
@Controller('courses') 
export class CourseController {
  constructor(private courseService: CourseService) {}

  
  @Post()
  create(@Body() createCourseDto: CourseCreateIn, @CurrentUser() user : JwtUser) {
    createCourseDto.ownerId = user.userId;
    return this.courseService.create(createCourseDto);
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
  async remove(@Param('courseId') courseId: string) {
    return this.courseService.remove(courseId);
  }
}
