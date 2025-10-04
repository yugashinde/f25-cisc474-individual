import { Controller } from '@nestjs/common';
import { UsercontrollerService } from './usercontroller.service';

@Controller('usercontroller')
export class UsercontrollerController {
  constructor(private readonly usercontrollerService: UsercontrollerService) {}
}
