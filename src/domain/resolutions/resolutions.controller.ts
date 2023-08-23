import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResolutionsService } from './resolutions.service';
import { CreateResolutionDto } from './dto/create-resolution.dto';
import { UpdateResolutionDto } from './dto/update-resolution.dto';

@Controller('resolutions')
export class ResolutionsController {
  constructor(private readonly resolutionsService: ResolutionsService) {}

  @Post()
  create(@Body() createResolutionDto: CreateResolutionDto) {
    return this.resolutionsService.create(createResolutionDto);
  }

  @Get()
  findAll() {
    return this.resolutionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resolutionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResolutionDto: UpdateResolutionDto) {
    return this.resolutionsService.update(+id, updateResolutionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resolutionsService.remove(+id);
  }
}
