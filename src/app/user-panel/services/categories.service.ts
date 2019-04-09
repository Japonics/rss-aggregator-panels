import {Injectable} from '@angular/core';
import {HttpClientService} from '../../core/services/http-client.service';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ICategory} from '../interfaces/category.interface';
import {ICategoryDto} from '../interfaces/category-dto.interface';
import {ICategoriesService} from '../interfaces/categories-service.interface';
import {CATEGORIES_ROUTES} from './categories.routes';

@Injectable()
export class CategoriesService implements ICategoriesService {

  private _storedCategories: ICategory[] = null;

  constructor(private _httpClientService: HttpClientService) {
  }

  public getCategories(): Observable<ICategory[]> {
    if (this._storedCategories !== null) {
      return of(this._storedCategories);
    }

    return this._httpClientService
      .get(CATEGORIES_ROUTES.getCategoriesRoute())
      .pipe<ICategory[], any>(
        map((response: ICategoryDto[]) => {
          const result = response.map(item => {
            return {
              id: item.id,
              image: item.image,
              title: item.title,
              to_read: item.to_read
            };
          });

          this._storedCategories = result;

          return result;
        }),
        catchError(err => err)
      );
  }
}
