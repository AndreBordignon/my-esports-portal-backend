import { Controller, Get, Body, Query, Param } from '@nestjs/common';
import { PandaScoreService } from './panda-score.service';

@Controller('pandascore')
export class PandaScoreController {
  constructor(private readonly pandaScoreService: PandaScoreService) {}

  @Get('/teams')
  getAllTeams(@Query() params?: any): any {
    console.log(params);
    return this.pandaScoreService.getTeams(params);
  }

  @Get('teams/:slug/matches')
  getTeamMatches(@Param() params?: any): any {
    console.log(params);
    return this.pandaScoreService.getTeamMatches(params.slug);
  }
}
