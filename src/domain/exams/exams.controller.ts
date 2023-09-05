import { Controller, Get, Post, Put, Delete, Body, Param, Query, BadRequestException } from '@nestjs/common';
import { ExamService } from './exams.service';
import { Exam, ExamList } from './entities/exam.schema';
import { ApiResponse } from 'src/common/response.interface';



const CURRENT_DOMAIN = 'Exam'

@Controller('exams')
export class ExamController {
  constructor(private readonly examService: ExamService) { }

  @Get()
  async findAll(@Query('isPublished') isPublished: string): Promise<ApiResponse<ExamList[]>> {
    try {
      const isPublishedBool = isPublished === 'true';
      let data: any[] = await this.examService.findAll(isPublishedBool);

      let examsFormat = data.map(exam => ({
        title: exam.title,
        questionCount: exam.questions.length,
        _id: exam._id,
        isPublished: exam.isPublished
      }));

      return { status: 'success', message: `${CURRENT_DOMAIN}'s fetched successfully`, data: examsFormat, count: data.length ? data.length : 0 };
    } catch (error) {
      throw new BadRequestException(error.message);
    }

  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ApiResponse<Exam>> {
    try {
      const data: Exam = await this.examService.findById(id);
      return { status: 'success', message: `${CURRENT_DOMAIN} found successfully`, data };
    } catch (error) {
      throw new BadRequestException(error.message);
    }

  }

  @Post()
  async create(@Body() exam: Exam): Promise<ApiResponse<Exam>> {

    try {
      const data: Exam = await this.examService.create(exam);
      return { status: 'success', message: `${CURRENT_DOMAIN}'s created successfully`, data };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Put(':id/publish')
  async publishOrUnpublishExam(@Param('id') id: string, @Body('shouldPublish') shouldPublish: boolean): Promise<ApiResponse<Exam>> {

    try {
      const data: Exam = await this.examService.publishOrUnpublishExam(id, shouldPublish);
      return { status: 'success', message: `${CURRENT_DOMAIN} published successfully`, data };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  async softDelete(@Param('id') id: string): Promise<Exam> {

    return this.examService.softDelete(id);
  }
}
