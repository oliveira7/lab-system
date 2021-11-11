import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Laboratory } from 'src/entities/laboratory.entity';
import { CreateLaboratory } from 'src/interfaces/request/create-laboratory.interface';
import { UpdateLaboratory } from 'src/interfaces/request/update-laboratory.interface';
import { Repository } from 'typeorm';

@Injectable()
export class LaboratoryService {
  constructor(
    @InjectRepository(Laboratory)
    private readonly laboratoryRepository: Repository<Laboratory>,
  ) {}

  findAll() {
    return this.laboratoryRepository.find();
  }

  findOne(id: string) {
    const laboratory = this.laboratoryRepository.findOne(id);

    if (!laboratory) {
      throw new NotFoundException(`Laboratory ID ${id} not found.`);
    }

    return laboratory;
  }

  create(createLaboratory: CreateLaboratory) {
    const laboratory = this.laboratoryRepository.create(createLaboratory);

    return this.laboratoryRepository.save(laboratory);
  }

  async update(id: string, updateLaboratory: UpdateLaboratory) {
    const laboratory = await this.laboratoryRepository.preload({
      id: +id,
      ...updateLaboratory,
    });

    if (!laboratory) {
      throw new NotFoundException(`Laboratory ID ${id} not found.`);
    }

    return this.laboratoryRepository.save(laboratory);
  }

  async remove(id: string) {
    const laboratory = await this.laboratoryRepository.findOne(id);

    if (!laboratory) {
      throw new NotFoundException(`Laboratory ID ${id} not found.`);
    }

    return this.laboratoryRepository.remove(laboratory);
  }
}
