import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LaboratoryModule } from './modules/laboratory.module';
import { ExamModule } from './modules/exam.module';
@Module({
  imports: [TypeOrmModule.forRoot(), LaboratoryModule, ExamModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
