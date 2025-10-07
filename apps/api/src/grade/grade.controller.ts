import { Controller, Get, Param} from '@nestjs/common';
import { GradeService } from './grade.service';

@Controller('grade')
export class GradeController {
  constructor(private readonly gradeService: GradeService) {}
  @Get()
  async findAll() {
    return this.gradeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.gradeService.findOne(Number(id));
  }
}
