import { Controller } from '@nestjs/common';
import { GradecontrollerService } from './gradecontroller.service';

@Controller('gradecontroller')
export class GradecontrollerController {
  constructor(private readonly gradecontrollerService: GradecontrollerService) {}
}
