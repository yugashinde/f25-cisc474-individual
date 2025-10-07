import { Controller, Get, Param } from '@nestjs/common';
import { EnrollnmentService } from './enrollnment.service';

@Controller('enrollnment')
export class EnrollnmentController {
  constructor(private readonly enrollnmentService: EnrollnmentService) {}

  @Get()
  async findAll() {
    return this.enrollnmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.enrollnmentService.findOne(Number(id));
  }
}
