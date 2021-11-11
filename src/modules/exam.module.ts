import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamController } from 'src/controllers/exam.controller';
import { Exam } from 'src/entities/exam.entity';
import { ExamService } from 'src/services/exam.service';

@Module({
  imports: [TypeOrmModule.forFeature([Exam])],
  controllers: [ExamController],
  providers: [ExamService],
})
export class ExamModule {}
