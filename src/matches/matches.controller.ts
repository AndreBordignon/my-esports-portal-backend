import { Controller, Get, Post, Body } from '@nestjs/common';
import { Match } from './interfaces/matches';
import { MatchesService } from './matches.service';

@Controller('matches')
export class MatchesController {
  constructor(private matchesService: MatchesService) {}

  @Post()
  async create(@Body() createMatch: Match) {
    this.matchesService.create(createMatch);
  }
  @Get()
  findAll(): string {
    return 'All matches';
  }
}
