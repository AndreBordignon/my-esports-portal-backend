import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchesController } from './matches/matches.controller';
import { MatchesService } from './matches/matches.service';
import { PandaScoreModule } from './panda-score/panda-score.module';
import { PandaScoreController } from './panda-score/pandascore.controller';
import { PandaScoreService } from './panda-score/panda-score.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [PandaScoreModule, HttpModule],
  controllers: [AppController, MatchesController, PandaScoreController],
  providers: [AppService, MatchesService, PandaScoreService],
})
export class AppModule {}
