import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { CreateLaboratory } from 'src/interfaces/request/create-laboratory.interface';
import { UpdateLaboratory } from 'src/interfaces/request/update-laboratory.interface';
import { LaboratoryService } from 'src/services/laboratory.service';

@Controller('laboratories')
export class LaboratoryController {
  constructor(private readonly laboratoryService: LaboratoryService) {}

  @Get()
  index() {
    return this.laboratoryService.findAll();
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.laboratoryService.findOne(id);
  }

  @Post()
  create(@Body() createLaboratory: CreateLaboratory) {
    return this.laboratoryService.create(createLaboratory);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLaboratory: UpdateLaboratory) {
    return this.laboratoryService.update(id, updateLaboratory);
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.laboratoryService.remove(id);
  }
}
