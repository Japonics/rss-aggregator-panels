import {Component, OnInit} from '@angular/core';
import {ICategoriesGroup} from '../../interfaces/categories-group.interface';
import {CategoriesMockService} from '../../services/categories-mock.service';
import {ICategory} from '../../interfaces/category.interface';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  public categoriesGroups: ICategoriesGroup[] = [];
  public isLoading: boolean = true;

  constructor(private _categoriesService: CategoriesMockService,
  ) {
  }

  public ngOnInit(): void {
    this._getCategories();
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

          for (let index = 0, groupIndex = 0; index < categories.length; index++) {

            if (index % 5 === 0) {
              if (group.categories.length) {
                groups.push(group);

                groupIndex++;
                group = {
                  index: groupIndex,
                  categories: []
                };
              }
            }

            group.categories.push(categories[index]);
          }

          if (group.categories.length) {
            groups.push(group);
          }

          console.log(groups);
          this.categoriesGroups = groups;
          this.isLoading = false;
        },
        () => {
        }
      );
  }
}
