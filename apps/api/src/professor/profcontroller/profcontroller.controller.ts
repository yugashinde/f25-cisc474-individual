import { Controller } from '@nestjs/common';
import { ProfcontrollerService } from './profcontroller.service';

@Controller('profcontroller')
export class ProfcontrollerController {
  constructor(private readonly profcontrollerService: ProfcontrollerService) {}
}
