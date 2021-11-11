import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaboratoryController } from 'src/controllers/laboratory.controller';
import { Laboratory } from 'src/entities/laboratory.entity';
import { LaboratoryService } from 'src/services/laboratory.service';

@Module({
  imports: [TypeOrmModule.forFeature([Laboratory])],
  controllers: [LaboratoryController],
  providers: [LaboratoryService],
})
export class LaboratoryModule {}