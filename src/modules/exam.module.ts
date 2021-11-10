import { Module } from '@nestjs/common';
import { ExamController } from 'src/controllers/exam.controller';
import { ExamService } from 'src/services/exam.service';

@Module({
  controllers: [ExamController],
  providers: [ExamService],
})
export class ExamModule {}
