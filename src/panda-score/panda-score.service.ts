// pandascore.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

@Injectable()
export class PandaScoreService {
  constructor(private httpService: HttpService) {}
  private readonly logger = new Logger(PandaScoreService.name);

  getTeams(filterParams?: any): Observable<any> {
    let url = `https://api.pandascore.co/teams`;
    let queryParams = '';
    if (filterParams) {
      queryParams = new URLSearchParams(filterParams).toString();
      url += `?${queryParams}`;
    }
    console.log(queryParams, url);

    return this.httpService
      .get(url, {
        params: {
          search: filterParams.search,
          filter: filterParams.filter,
        },
        headers: {
          Authorization: `Bearer kn4JnhL0DEsvVvb0yOL1WEwzJ6rI2KF-dMPu8rnXfb6CboHjRmU`,
        },
      })
      .pipe(map((response) => response.data));
  }

  getTeamMatches(slug?: string): Observable<any> {
    const url = `https://api.pandascore.co/teams/${slug}/matches`;

    return this.httpService
      .get(url, {
        headers: {
          Authorization: `Bearer kn4JnhL0DEsvVvb0yOL1WEwzJ6rI2KF-dMPu8rnXfb6CboHjRmU`,
        },
      })
      .pipe(map((response) => response.data));
  }
}
