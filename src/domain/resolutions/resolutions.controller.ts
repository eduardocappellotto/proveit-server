import { Controller, Get, Post, Body, Patch, Param, Delete, Put, BadRequestException, ConflictException } from '@nestjs/common';
import { ResolutionService } from './resolutions.service';

import { ApiResponse } from 'src/common/response.interface';
import { Resolution } from './entities/resolution.schema';
import { FinishResolutionDto } from './dto/finish-resolution.dto';
import { StartResolutionDto } from './dto/start-resolution.dto';

const CURRENT_DOMAIN = 'resolutions'

@Controller('resolutions')
export class ResolutionsController {
  constructor(private readonly resolutionsService: ResolutionService) { }

  @Get('list/:userId')
  async listResolutionsByUserId(@Param('userId') userId: string): Promise<ApiResponse<Resolution[]>> {

    try {
      const data: Resolution[] = await this.resolutionsService.getResolutionsByUserId(userId)
      return { status: 'success', message: `${CURRENT_DOMAIN} finished successfully`, data };
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Post('start')
  async startResolution(@Body() startDto: StartResolutionDto): Promise<ApiResponse<Resolution>> {
    try {
      const hasStarted = await this.resolutionsService.hasStartedResolution(startDto.userId, startDto.examId);
      if (hasStarted) {
        throw new ConflictException('Você já resolveu essa prova. Visualize o resultado em "Lista de Resoluções"');
      }

      const data: Resolution = await this.resolutionsService.startResolution(startDto);
      return { status: 'success', message: `${CURRENT_DOMAIN} started successfully`, data };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Put('finish/:resolutionId')
  async finishResolution(@Param('resolutionId') resolutionId: string, @Body() finishDto: FinishResolutionDto): Promise<ApiResponse<Resolution>> {

    try {
      const data: Resolution = await this.resolutionsService.finishResolution(resolutionId, finishDto)
      return { status: 'success', message: `${CURRENT_DOMAIN} finished successfully`, data };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get(':resolutionId')
  async getResolution(@Param('resolutionId') resolutionId: string): Promise<ApiResponse<Resolution>> {

    try {
      const data: Resolution = await this.resolutionsService.getResolution(resolutionId)
      return { status: 'success', message: `${CURRENT_DOMAIN} finished successfully`, data };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
