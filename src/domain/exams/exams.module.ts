import { Module } from '@nestjs/common';
import { ExamService } from './exams.service';
import { ExamController } from './exams.controller';
import { ExamRepository } from './repositories/exams.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Exam, ExamSchema } from './entities/exam.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Exam.name, schema: ExamSchema }])],
  controllers: [ExamController],
  providers: [ExamRepository, ExamService],
})
export class ExamsModule { }
