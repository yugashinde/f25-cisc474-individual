import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AssignmentModule } from './assignment/assignment.module';
import { CourseModule } from './course/course.module';
import { ProfessorProfileModule } from './professor-profile/professor-profile.module';
import { StudentProfileModule } from './student-profile/student-profile.module';
import { UserModule } from './user/user.module';
import { GradeModule } from './grade/grade.module';

@Module({
  imports: [LinksModule, AssignmentModule, CourseModule, ProfessorProfileModule, StudentProfileModule, UserModule, GradeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
