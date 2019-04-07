import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {INewsService} from '../interfaces/news-service.interface';
import {INews} from '../interfaces/news.interface';
import {NEWS_MOCKUP} from './mock-data/news.data';

@Injectable()
export class NewsMockService implements INewsService {

  constructor() {
  }

  public getNews(categoryID: string): Observable<INews[]> {
    return of(NEWS_MOCKUP);
  }

  public markAsRead(newsID: string): Observable<any> {
    return of(true);
  }

  public markAsFavorite(newsID: string): Observable<any> {
    return of(true);
  }

  public getFavoritesNews(categoryID: string): Observable<INews[]> {
    const filtered: INews[] = NEWS_MOCKUP.filter(x => x.is_favorite);
    return of(filtered);
  }

  public removeAsFavorite(newsID: string): Observable<any> {
    return of(true);
  }
}
