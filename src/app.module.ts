import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LaboratoryModule } from './modules/laboratory.module';
import { ExamModule } from './modules/exam.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "labsys_db",
    autoLoadEntities: true,
    synchronize: true,
  }), LaboratoryModule, ExamModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
