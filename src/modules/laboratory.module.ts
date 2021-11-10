import { Module } from '@nestjs/common';
import { LaboratoryController } from 'src/controllers/laboratory.controller copy';
import { LaboratoryService } from 'src/services/laboratory.service';

@Module({
  controllers: [LaboratoryController],
  providers: [LaboratoryService],
})
export class LaboratoryModule {}