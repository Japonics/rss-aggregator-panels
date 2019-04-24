import {Injectable} from '@angular/core';
import {HttpClientService} from '../../core/services/http-client.service';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ICategory} from '../interfaces/category.interface';
import {ICategoryDto} from '../interfaces/category-dto.interface';
import {ICategoriesService} from '../interfaces/categories-service.interface';
import {CATEGORIES_ROUTES} from './categories.routes';

@Injectable()
export class CategoriesService implements ICategoriesService {

  constructor(private _httpClientService: HttpClientService) {
  }

  public getCategories(): Observable<ICategory[]> {
    return this._httpClientService
      .get(CATEGORIES_ROUTES.getCategoriesRoute())
      .pipe<ICategory[], any>(
        map((response: ICategoryDto[]) => {
          return response.map(item => {
            return {
              id: item._id,
              image: item.image,
              title: item.title,
              to_read: item.to_read
            };
          });
        }),
        catchError(err => throwError(err.error.message))
      );
  }
}
