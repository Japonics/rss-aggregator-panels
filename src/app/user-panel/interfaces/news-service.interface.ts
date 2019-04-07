import {Observable} from 'rxjs';
import {INews} from './news.interface';

export interface INewsService {
  getNews(categoryID: string): Observable<INews[]>;
  markAsRead(newsID: string): Observable<any>;
  markAsFavorite(newsID: string): Observable<any>;
  getFavoritesNews(categoryID: string): Observable<INews[]>;
  removeAsFavorite(newsID: string): Observable<any>;
}
