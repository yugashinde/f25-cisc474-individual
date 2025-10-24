import { PartialType } from '@nestjs/mapped-types';
import { CreateProfessorProfileDto } from './create-professor-profile.dto';

export class UpdateProfessorProfileDto extends PartialType(CreateProfessorProfileDto) {}
