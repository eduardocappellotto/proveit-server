import { Test, TestingModule } from '@nestjs/testing';
import { ResolutionsController } from './resolutions.controller';
import { ResolutionsService } from './resolutions.service';

describe('ResolutionsController', () => {
  let controller: ResolutionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResolutionsController],
      providers: [ResolutionsService],
    }).compile();

    controller = module.get<ResolutionsController>(ResolutionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
