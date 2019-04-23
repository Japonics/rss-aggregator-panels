import {Component} from '@angular/core';
import {ICategoriesGroup} from '../../interfaces/categories-group.interface';
import {ICategory} from '../../interfaces/category.interface';
import {animate, style, transition, trigger} from '@angular/animations';
import {NotificationService} from '../../../core/services/notification.service';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  animations: [
    trigger('category', [
      transition(':enter', [
        style({transform: 'scale(0.5)', opacity: 0}),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({transform: 'scale(1)', opacity: 1}))  // final
      ]),
    ])
  ]
})
export class CategoriesListComponent {

  public categoriesGroups: ICategoriesGroup[] = [];
  public isLoading: boolean = true;
  public errorOccurred: boolean = false;

  constructor(private _categoriesService: CategoriesService,
              private _notificationService: NotificationService) {
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

          this.categoriesGroups = groups;
          this.isLoading = false;
        },
        (error: string) => {
          this.isLoading = false;
          this.errorOccurred = true;
          this._notificationService.showNotification({
            message: error,
            closeLabel: 'Ok ;(',
            type: 'error'
          });
        }
      );
  }
}
