import {Injectable} from '@angular/core';
import {HttpClientService} from '../../core/services/http-client.service';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ICategory} from '../interfaces/category.interface';
import {ICategoryDto} from '../interfaces/category-dto.interface';
import {ICategoriesService} from '../interfaces/categories-service.interface';

@Injectable()
export class CategoriesService implements ICategoriesService {

  constructor(private _httpClientService: HttpClientService) {
  }

  public getCategories(): Observable<ICategory[]> {
    return this._httpClientService
      .get('')
      .pipe<ICategory[], any>(
        map((response: ICategoryDto[]) => {
          return response.map(item => {
            return {
             id: item.id,
             image: item.image,
             title: item.title
            };
          });
        }),
        catchError(err => err)
      );
  }
}
