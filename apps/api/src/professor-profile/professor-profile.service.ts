import { Injectable } from '@nestjs/common';
import { CreateProfessorProfileDto } from './dto/create-professor-profile.dto';
import { UpdateProfessorProfileDto } from './dto/update-professor-profile.dto';
import { PrismaService } from '../prisma.service';
@Injectable()
export class ProfessorProfileService {
  constructor(private prisma: PrismaService) { }
  create(createProfessorProfileDto: CreateProfessorProfileDto) {
    return 'This action adds a new professorProfile';
  }

  findAll() {
    return this.prisma.professorProfile.findMany();
  }

  /*findOne(userId: string) {
    return this.prisma.professorProfile.findUnique({
      where:{userId},});
  }*/

  update(id: number, updateProfessorProfileDto: UpdateProfessorProfileDto) {
    return `This action updates a #${id} professorProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} professorProfile`;
  }
}
