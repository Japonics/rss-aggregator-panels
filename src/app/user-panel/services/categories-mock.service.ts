import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ICategory} from '../interfaces/category.interface';
import {ICategoriesService} from '../interfaces/categories-service.interface';
import {CATEGORIES_MOCKUP} from './mock-data/categories.data';

@Injectable()
export class CategoriesMockService implements ICategoriesService {

  constructor() {
  }

  public getCategories(): Observable<ICategory[]> {
    return of(CATEGORIES_MOCKUP);
  }
}
