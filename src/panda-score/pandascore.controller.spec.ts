import { Test, TestingModule } from '@nestjs/testing';
import { PandaScoreController } from './pandascore.controller';

describe('PandascoreController', () => {
  let controller: PandaScoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PandaScoreController],
    }).compile();

    controller = module.get<PandaScoreController>(PandaScoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
