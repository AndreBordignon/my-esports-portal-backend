// pandascore.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PandaScoreService } from './panda-score.service';

@Module({
  imports: [HttpModule],
  providers: [PandaScoreService],
})
export class PandaScoreModule {}
