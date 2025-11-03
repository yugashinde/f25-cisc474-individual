import { Injectable } from '@nestjs/common';
import { CreateStudentProfileDto } from './dto/create-student-profile.dto';
import { UpdateStudentProfileDto } from './dto/update-student-profile.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class StudentProfileService {
  constructor(private prisma: PrismaService) { }
  create(createStudentProfileDto: CreateStudentProfileDto) {
    return 'This action adds a new studentProfile';
  }

  findAll() {
    return this.prisma.studentProfile.findMany();
  }

/*findOne(userId: string) {
    return this.prisma.studentProfile.findUnique(
      { where: { userId }, }
    )
  }*/

  update(id: number, updateStudentProfileDto: UpdateStudentProfileDto) {
    return `This action updates a #${id} studentProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentProfile`;
  }
}
