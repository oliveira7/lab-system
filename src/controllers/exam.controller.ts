import { Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';

@Controller('exams')
export class ExamController {
  @Get()
  index(): string {
    return 'olamundo';
  }

  @Get(':id')
  show(@Param() params): string {
    return params.id;
  }

  @Post()
  create(@Param() params): string {
    return params.id;
  }

  @Put(':id')
  update(@Param() params): string {
    return params.id;
  }

  @Delete(':id')
  destroy(@Param() params): string {
    return params.id;
  }
}
