import { Injectable, NotFoundException } from '@nestjs/common';
import { ResolutionRepository } from './repositories/resolutions.repository';
import { Resolution } from './entities/resolution.schema';
import { StartResolutionDto } from './dto/start-resolution.dto';
import { FinishResolutionDto } from './dto/finish-resolution.dto';
import { ExamRepository } from '../exams/repositories/exams.repository';

@Injectable()
export class ResolutionService {
  constructor(private readonly resolutionRepository: ResolutionRepository, private readonly examRepository: ExamRepository) { }

  async startResolution(data: StartResolutionDto): Promise<Resolution> {
    return this.resolutionRepository.create({
      examId: data.examId,
      userId: data.userId,
      startedAt: Date.now(),
      answers: [],
    });
  }

  async finishResolution(resolutionId: string, data: FinishResolutionDto): Promise<Resolution> {
    const resolution = await this.resolutionRepository.findOneById(resolutionId);

    if (!resolution) throw new NotFoundException('Resolution not found');

    // Logic to calculate grade based on data.answers and the correct answers from the exam
    const grade = await this.calculateGrade(resolution.examId, data.answers);


    return this.resolutionRepository.update(resolutionId, {
      answers: data.answers,
      finishedAt: Date.now(),
      grade: grade
    });
  }

  async getResolution(resolutionId: string): Promise<Resolution> {
    return this.resolutionRepository.findOneById(resolutionId);
  }

  async getResolutionsByUserId(userId: string): Promise<Resolution[]> {
    return this.resolutionRepository.findAllByUserId(userId);
  }

  async hasStartedResolution(userId: string, examId: string): Promise<boolean> {
    const existingResolution = await this.resolutionRepository.findOne({
      userId: userId,
      examId: examId,
    });
    return !!existingResolution;
  }


  async calculateGrade(examId: string, userAnswers: any[]): Promise<number> {

    const exam = await this.examRepository.findById(examId);
    if (!exam) {
      throw new Error('Exam not found');
    }

    const totalQuestions = exam.questions.length;

    if (userAnswers.length !== totalQuestions) {
      throw new Error('Mismatch in number of answers provided');
    }

    let correctAnswersCount = 0;

    for (let i = 0; i < totalQuestions; i++) {
      const userAnswer = userAnswers[i].answer
      const correctAnswer = exam.questions[i].correctOption;

      if (userAnswer === correctAnswer) {
        correctAnswersCount++;
      }
    }

    const grade = (correctAnswersCount / totalQuestions) * 10;
    return grade;
  }

}
