import {Injectable} from '@angular/core';
import {HttpClientService} from '../../core/services/http-client.service';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {INewsService} from '../interfaces/news-service.interface';
import {INews} from '../interfaces/news.interface';
import {INewsDto} from '../interfaces/news-dto.interface';

@Injectable()
export class NewsService implements INewsService {

  constructor(private _httpClientService: HttpClientService) {
  }

  public getNews(categoryID: string): Observable<INews[]> {
    return this._httpClientService
      .get('')
      .pipe<INews[], any>(
        map((response: INewsDto[]) => {
          return response.map(item => {
            return {
              id: item.id,
              title: item.title,
              description: item.description,
              date: item.date,
              image: item.image
            };
          });
        }),
        catchError(err => err)
      );
  }

  public markAsRead(newsID: string): Observable<any> {
    return this._httpClientService
      .put('', {})
      .pipe(
        map(item => item),
        catchError(err => err)
      );
  }

  public markAsFavorite(newsID: string): Observable<any> {
    return this._httpClientService
      .put('', {})
      .pipe(
        map(item => item),
        catchError(err => err)
      );
  }
}
