import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { CreateExam } from 'src/interfaces/create-exam.interface';
import { UpdateExam } from 'src/interfaces/update-exam.interface';
import { ExamService } from 'src/services/exam.service';

@Controller('exams')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Get()
  index(@Query('name') name: string) {
    if (name) {
      return this.examService.findByName(name);
    }
    return this.examService.findAll();
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.examService.findOne(id);
  }

  @Post()
  create(@Body() createExam: CreateExam) {
    return this.examService.create(createExam);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateExam: UpdateExam) {
    return this.examService.update(id, updateExam);
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.examService.remove(id);
  }
}
