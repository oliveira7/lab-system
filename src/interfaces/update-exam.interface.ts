import { PartialType } from '@nestjs/mapped-types';
import { CreateExam } from './create-exam.interface';

export class UpdateExam extends PartialType(CreateExam) {}
