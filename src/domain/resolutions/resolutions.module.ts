import { Module } from '@nestjs/common';
import { ResolutionsService } from './resolutions.service';
import { ResolutionsController } from './resolutions.controller';

@Module({
  controllers: [ResolutionsController],
  providers: [ResolutionsService],
})
export class ResolutionsModule {}
