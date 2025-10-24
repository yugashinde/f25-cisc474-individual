import { Injectable } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { PrismaService } from '../prisma.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class GradeService {
  constructor(private prisma: PrismaService){}

  create(createGradeDto: CreateGradeDto) {
    return 'This action adds a new grade';
  }

  findAll() {
    return this.prisma.grade.findMany();
  }

  findOne(id: string) {
    return this.prisma.grade.findUnique({
      where: {id},
    })
  }

  update(id: number, updateGradeDto: UpdateGradeDto) {
    return `This action updates a #${id} grade`;
  }

  remove(id: number) {
    return `This action removes a #${id} grade`;
  }
}
