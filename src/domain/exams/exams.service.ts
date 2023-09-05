import { Injectable } from '@nestjs/common';
import { ExamRepository } from './repositories/exams.repository';
import { Exam } from './entities/exam.schema';

@Injectable()
export class ExamService {
  constructor(private readonly examRepository: ExamRepository) { }

  async create(exam: Exam) {
    return await this.examRepository.create(exam);
  }

  async findAll(isPublished?: boolean): Promise<Exam[]> {
    return this.examRepository.findAll(isPublished);
  }

  async findById(id: string): Promise<Exam | null> {
    return this.examRepository.findById(id);
  }

  async publishOrUnpublishExam(id: string, shouldPublish: boolean): Promise<Exam> {
    return this.examRepository.publishOrUnpublishExam(id, shouldPublish);
  }

  async softDelete(id: string): Promise<Exam> {
    return this.examRepository.softDelete(id);
  }
}
