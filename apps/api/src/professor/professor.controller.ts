import { Controller, Get, Param } from '@nestjs/common';
import { ProfessorService } from './professor.service';

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}
  @Get()
  async findAll() {
    return this.professorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.professorService.findOne(Number(id));
  }
}
