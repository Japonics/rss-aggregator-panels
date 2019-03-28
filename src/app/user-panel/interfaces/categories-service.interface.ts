import {Observable} from 'rxjs';
import {ICategory} from './category.interface';

export interface ICategoriesService {
  getCategories(): Observable<ICategory[]>;
}
