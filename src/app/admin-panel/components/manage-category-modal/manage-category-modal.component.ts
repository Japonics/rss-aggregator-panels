import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ICategory} from '../../interfaces/category.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoriesMockService} from '../../services/categories-mock.service';
import {NotificationService} from '../../../core/services/notification.service';

export interface IManageCategoryModalComponentInput {
  category: ICategory;
}

@Component({
  selector: 'app-manage-category-modal',
  templateUrl: './manage-category-modal.component.html',
  styleUrls: ['./manage-category-modal.component.scss']
})
export class ManageCategoryModalComponent {

  public manageForm: FormGroup;
  public isNew: boolean = true;

  constructor(public dialogRef: MatDialogRef<ManageCategoryModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IManageCategoryModalComponentInput,
              private _notificationService: NotificationService,
              private _categoriesService: CategoriesMockService) {

    if (this.data.category) {
      this.isNew = false;
    }

    this.manageForm = new FormGroup({
      title: new FormControl(!this.isNew ? this.data.category.title : '', [
        Validators.required,
        Validators.minLength(2)
      ]),
      image: new FormControl(!this.isNew ? this.data.category.image : '', [
        Validators.required
      ]),
      color: new FormControl(!this.isNew ? this.data.category.color : '', [
        Validators.required
      ])
    });
  }

  public save(): void {
    if (!this.manageForm.valid) {
      return;
    }

    const data: ICategory = this.manageForm.value;
    if (!this.isNew) {
      data.id = this.data.category.id;
    }

    if (this.isNew) {
      this._categoriesService
        .createCategory(data)
        .subscribe(
          (category: ICategory) => {
            this.dialogRef.close(category);
          },
          (error: string) => {
            this._notificationService.showNotification({
              message: error,
              type: 'error',
              closeLabel: 'Ok :('
            });
          }
        );
    } else {
      this._categoriesService
        .updateCategory(data)
        .subscribe(
          (category: ICategory) => {
            this.dialogRef.close(category);
          },
          (error: string) => {
            this._notificationService.showNotification({
              message: error,
              type: 'error',
              closeLabel: 'Ok :('
            });
          }
        );
    }

  }

  public cancel(): void {
    this.dialogRef.close(null);
  }
}
