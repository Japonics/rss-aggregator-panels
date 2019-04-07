import {Observable} from 'rxjs';
import {ICategory} from './category.interface';

export interface ICategoriesService {
  getCategories(): Observable<ICategory[]>;
  createCategory(category: ICategory): Observable<ICategory>;
  updateCategory(category: ICategory): Observable<ICategory>;
  deleteCategory(categoryID: string): Observable<any>;
}
