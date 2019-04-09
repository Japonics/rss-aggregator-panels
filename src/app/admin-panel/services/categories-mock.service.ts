import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ICategory} from '../interfaces/category.interface';
import {delay} from 'rxjs/operators';
import {ICategoriesService} from '../interfaces/categories-service.interface';
import {randomStringGenerator} from '../../core/functions/random-string-generator.function';
import {CATEGORIES_MOCKUP} from './mock-data/categories.data';

@Injectable()
export class CategoriesMockService implements ICategoriesService {

  constructor() {
  }

  public getCategories(): Observable<ICategory[]> {
    const categories: ICategory[] = [...[], ...CATEGORIES_MOCKUP];
    return of(categories).pipe(delay(2000));
  }

  public createCategory(category: ICategory): Observable<ICategory> {
    category.id = randomStringGenerator(10);
    CATEGORIES_MOCKUP.push(category);
    return of(category);
  }

  public updateCategory(category: ICategory): Observable<ICategory> {
    return of(category);
  }

  public deleteCategory(categoryID: string): Observable<any> {
    const index: number = CATEGORIES_MOCKUP.findIndex(x => x.id === categoryID);
    CATEGORIES_MOCKUP.slice(index);
    return of(true);
  }
}
