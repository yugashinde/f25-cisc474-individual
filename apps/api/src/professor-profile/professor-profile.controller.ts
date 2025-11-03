import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfessorProfileService } from './professor-profile.service';
import { CreateProfessorProfileDto } from './dto/create-professor-profile.dto';
import { UpdateProfessorProfileDto } from './dto/update-professor-profile.dto';

@Controller('professor-profile')
export class ProfessorProfileController {
  constructor(private readonly professorProfileService: ProfessorProfileService) {}

  @Post()
  create(@Body() createProfessorProfileDto: CreateProfessorProfileDto) {
    return this.professorProfileService.create(createProfessorProfileDto);
  }

  @Get()
  async findAll() {
    return await this.professorProfileService.findAll();
  }

  /*@Get(':userId')
  async findOne(@Param('userId') userId: string) {
    return await this.professorProfileService.findOne(userId);
  }
*/
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfessorProfileDto: UpdateProfessorProfileDto) {
    return this.professorProfileService.update(+id, updateProfessorProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professorProfileService.remove(+id);
  }
}
