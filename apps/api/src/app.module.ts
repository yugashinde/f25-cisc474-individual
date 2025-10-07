import { Module } from '@nestjs/common';
import { LinksModule } from './links/links.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CourseModule } from './course/course.module';
import { ProfessorModule } from './professor/professor.module';
import { UserModule } from './user/user.module';
import { GradeModule } from './grade/grade.module';

@Module({
  imports: [LinksModule, CourseModule, ProfessorModule, UserModule, GradeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
