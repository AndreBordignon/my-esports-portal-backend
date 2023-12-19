import { Injectable } from '@nestjs/common';
import { Match } from './interfaces/matches';

@Injectable()
export class MatchesService {
  private readonly matches: Match[] = [];

  create(match: Match) {
    this.matches.push(match);
  }

  findAll(): Match[] {
    return this.matches;
  }
}
