import { Module } from '@nestjs/common';
import { ResolutionService } from './resolutions.service';
import { ResolutionsController } from './resolutions.controller';
import { ExamRepository } from '../exams/repositories/exams.repository';
import { ResolutionRepository } from './repositories/resolutions.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Resolution, ResolutionSchema } from './entities/resolution.schema';
import { Exam, ExamSchema } from '../exams/entities/exam.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Resolution.name, schema: ResolutionSchema }, { name: Exam.name, schema: ExamSchema }])],
  controllers: [ResolutionsController],
  providers: [ResolutionService, ResolutionRepository, ExamRepository],
})
export class ResolutionsModule { }
