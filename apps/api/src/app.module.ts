import { Module } from '@nestjs/common';
import { LinksModule } from './links/links.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CourseModule } from './course/course.module';

@Module({
  imports: [LinksModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
