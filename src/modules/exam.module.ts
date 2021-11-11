import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamController } from 'src/controllers/exam.controller';
import { Exam } from 'src/entities/exam.entity';
import { Laboratory } from 'src/entities/laboratory.entity';
import { ExamService } from 'src/services/exam.service';

@Module({
  imports: [TypeOrmModule.forFeature([Exam, Laboratory])],
  controllers: [ExamController],
  providers: [ExamService],
})
export class ExamModule {}
