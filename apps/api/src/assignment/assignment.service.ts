import { Injectable } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { PrismaService } from '../prisma.service';
@Injectable()
export class AssignmentService {
  constructor(private prisma: PrismaService) {}

  create(createAssignmentDto: CreateAssignmentDto) {
    return 'This action adds a new assignment';
  }

  findAll() {
    return this.prisma.assignment.findMany();
  }

  findOne(assignmentId: string) {
    return this.prisma.assignment.findUnique({
      where : {assignmentId},
    })
  }

  update(id: number, updateAssignmentDto: UpdateAssignmentDto) {
    return `This action updates a #${id} assignment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignment`;
  }
}
