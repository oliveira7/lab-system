import { PartialType } from '@nestjs/mapped-types';
import { CreateLaboratory } from './create-laboratory.interface';

export class UpdateLaboratory extends PartialType(CreateLaboratory) {}
