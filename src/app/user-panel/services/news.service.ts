import {Injectable} from '@angular/core';
import {HttpClientService} from '../../core/services/http-client.service';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {INewsService} from '../interfaces/news-service.interface';
import {INews} from '../interfaces/news.interface';
import {INewsDto} from '../interfaces/news-dto.interface';
import {NEWS_ROUTES} from './news.routes';

@Injectable()
export class NewsService implements INewsService {

  constructor(private _httpClientService: HttpClientService) {
  }

  public getNews(categoryID: string): Observable<INews[]> {
    return this._httpClientService
      .get(NEWS_ROUTES.getNewsRoute(categoryID))
      .pipe<INews[], any>(
        map((response: INewsDto[]) => {
          return response.map(item => {
            return {
              id: item._id,
              category_id: item.category_id,
              title: item.title,
              description: item.description,
              date: item.date,
              image: item.image,
              is_favorite: item.is_favorite,
              read: item.read,
              source: item.source
            };
          });
        }),
        catchError(err => err)
      );
  }

  public markAsRead(newsID: string): Observable<any> {
    return this._httpClientService
      .put(NEWS_ROUTES.markAsReadRoute(newsID), {})
      .pipe(
        map(item => item),
        catchError(err => throwError(err.error.message))
      );
  }

  public markAsFavorite(newsID: string): Observable<any> {
    return this._httpClientService
      .put(NEWS_ROUTES.markAsFavoriteRoute(newsID), {})
      .pipe(
        map(item => item),
        catchError(err => throwError(err.error.message))
      );
  }

  public removeAsFavorite(newsID: string): Observable<any> {
    return this._httpClientService
      .delete(NEWS_ROUTES.removeAsFavoriteRoute(newsID))
      .pipe(
        map(item => item),
        catchError(err => throwError(err.error.message))
      );
  }

  public getFavoritesNews(): Observable<INews[]> {
    return this._httpClientService
      .get(NEWS_ROUTES.getFavoritesNews())
      .pipe<INews[], any>(
        map((response: INewsDto[]) => {
          return response.map(item => {
            return {
              id: item._id,
              category_id: item.category_id,
              title: item.title,
              description: item.description,
              date: item.date,
              image: item.image,
              is_favorite: item.is_favorite,
              read: item.read,
              source: item.source
            };
          });
        }),
        catchError(err => throwError(err.error.message))
      );
  }
}
