import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exam } from 'src/entities/exam.entity';
import { Laboratory } from 'src/entities/laboratory.entity';
import { CreateExam } from 'src/interfaces/create-exam.interface';
import { UpdateExam } from 'src/interfaces/update-exam.interface';
import { In, Repository } from 'typeorm';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(Exam)
    private readonly examRepository: Repository<Exam>,

    @InjectRepository(Laboratory)
    private readonly laboratoryRepository: Repository<Laboratory>,
  ) {}

  findAll() {
    return this.examRepository.find({ where: { active: true } });
  }

  findOne(id: string) {
    const exam = this.examRepository.findOne(id);

    if (!exam) {
      throw new NotFoundException(`Exam ID ${id} not found.`);
    }

    return exam;
  }

  async create(createExam: CreateExam) {
    const { laboratoriesIds } = createExam;
    const laboratories = await this.laboratoryRepository.find({
      where: { id: In(laboratoriesIds) },
    });

    const exam = this.examRepository.create({
      ...createExam,
      laboratories,
    });

    return this.examRepository.save(exam);
  }

  async update(id: string, updateExam: UpdateExam) {
    const exam = await this.examRepository.preload({
      id: +id,
      ...updateExam,
    });

    if (!exam) {
      throw new NotFoundException(`Exam ID ${id} not found.`);
    }

    return this.examRepository.save(exam);
  }

  async remove(id: string) {
    const exam = await this.examRepository.findOne(id);

    if (!exam) {
      throw new NotFoundException(`Exam ID ${id} not found.`);
    }

    return this.examRepository.remove(exam);
  }
}
