import {Component} from '@angular/core';
import {ICategoriesGroup} from '../../interfaces/categories-group.interface';
import {CategoriesMockService} from '../../services/categories-mock.service';
import {ICategory} from '../../interfaces/category.interface';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {

  public categoriesGroups: ICategoriesGroup[] = [];
  public isLoading: boolean = true;

  constructor(private _categoriesService: CategoriesMockService,
              private _domSanitizer: DomSanitizer) {

  }

  public ngOnInit(): void {
    this._getCategories();
  }

  public prepareUrl(url: string): SafeStyle {
    return this._domSanitizer.bypassSecurityTrustStyle(`url('${url}')`);
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
        () => {}
      );
  }
}
