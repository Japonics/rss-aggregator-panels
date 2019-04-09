import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ICategory} from '../interfaces/category.interface';
import {catchError, map} from 'rxjs/operators';
import {ICategoriesService} from '../interfaces/categories-service.interface';
import {HttpClientService} from '../../core/services/http-client.service';
import {ICategoryDto} from '../interfaces/category-dto.interface';
import {IRssChannelDto} from '../interfaces/rss-channel-dto.interface';
import {CATEGORIES_ROUTES} from './categories.routes';

@Injectable()
export class CategoriesService implements ICategoriesService {

  constructor(private _httpService: HttpClientService) {
  }

  public getCategories(): Observable<ICategory[]> {
    return this._httpService
      .get(CATEGORIES_ROUTES.getCategoriesRoute())
      .pipe<ICategory[], any>(
        map((response: ICategoryDto[]) => {
          return response.map(item => {
            return {
              id: item.id,
              image: item.image,
              title: item.title,
              color: item.color,
              channels: item.channels.map((channel: IRssChannelDto) => {
                return {
                  source: channel.source,
                  id: channel.id
                };
              })
            };
          });
        }),
        catchError(err => err)
      );
  }

  public createCategory(category: ICategory): Observable<ICategory> {
    const categoryDto: ICategoryDto = {
      id: null,
      title: category.title,
      image: category.image,
      channels: [],
      color: category.color
    };

    return this._httpService
      .post(CATEGORIES_ROUTES.createCategoryRoute(), categoryDto)
      .pipe<ICategory, any>(
        map((item: ICategoryDto) => {
          return {
            id: item.id,
            image: item.image,
            title: item.title,
            channels: [],
            color: item.color
          };
        }),
        catchError(err => err)
      );
  }

  public updateCategory(category: ICategory): Observable<ICategory> {
    const categoryDto: ICategoryDto = {
      id: category.id,
      title: category.title,
      image: category.image,
      channels: [],
      color: category.color
    };

    return this._httpService
      .put(CATEGORIES_ROUTES.updateCategoryRoute(categoryDto.id), categoryDto)
      .pipe<ICategory, any>(
        map((item: ICategoryDto) => {
          return {
            id: item.id,
            image: item.image,
            title: item.title,
            channels: [],
            color: item.color
          };
        }),
        catchError(err => err)
      );
  }

  public deleteCategory(categoryID: string): Observable<any> {
    return this._httpService
      .delete(CATEGORIES_ROUTES.deleteCategoryRoute(categoryID))
      .pipe(
        map(item => item),
        catchError(err => err)
      );
  }
}
