import {Component} from '@angular/core';
import {ICategoriesGroup} from '../../interfaces/categories-group.interface';
import {CategoriesMockService} from '../../services/categories-mock.service';
import {ICategory} from '../../interfaces/category.interface';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {

  public categoriesGroups: ICategoriesGroup[] = [];
  public isLoading: boolean = true;

  constructor(private _categoriesService: CategoriesMockService) {

  }

  public ngOnInit(): void {
    this._getCategories();
  }

  public prepareUrl(url: string): string {
    return `url('${url}')`;
  }

  private _getCategories(): void {
    this._categoriesService
      .getCategories()
      .subscribe(
        (categories: ICategory[]) => {
          const groups: ICategoriesGroup[] = [];
          let group: ICategoriesGroup = {
            index: 0,
            categories: []
          };

          let index: number = 0;
          for (const category of categories) {

            if (index % 5 === 0) {
              groups.push(group);
              ++index;
              group = {
                index: index,
                categories: []
              };
            }

            group.categories.push(category);
          }

          this.categoriesGroups = groups;
          this.isLoading = false;
        },
        () => {}
      );
  }
}
