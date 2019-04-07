import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {ICategory} from '../../interfaces/category.interface';
import {CategoriesMockService} from '../../services/categories-mock.service';
import {MatDialog, MatSelectionList, MatSelectionListChange} from '@angular/material';
import {
  IManageCategoryModalComponentInput,
  ManageCategoryModalComponent
} from '../manage-category-modal/manage-category-modal.component';
import {IRssChannel} from '../../interfaces/rss-channel.interface';
import {
  IManageRssChannelModalComponentInput,
  ManageRssChannelModalComponent
} from '../manage-rss-channel-modal/manage-rss-channel-modal.component';

@Component({
  selector: 'app-rss-channels-settings',
  templateUrl: './rss-channels-settings.component.html',
  styleUrls: ['./rss-channels-settings.component.scss']
})
export class RssChannelsSettingsComponent implements OnInit, AfterViewInit {

  @ViewChild('categoriesList', {read: MatSelectionList}) categoriesList: MatSelectionList;
  @ViewChild('channelsList', {read: MatSelectionList}) channelsList: MatSelectionList;

  public categories: ICategory[] = [];
  public currentCategory: ICategory = null;
  public currentChannel: IRssChannel = null;

  constructor(private _categoriesService: CategoriesMockService,
              private _dialog: MatDialog) {

  }

  public ngOnInit(): void {
    this._categoriesService
      .getCategories()
      .subscribe(
        (categories: ICategory[]) => {
          this.categories = categories;
          this._createSubscriptionForSelection();
        },
        () => {
        }
      );
  }

  public ngAfterViewInit(): void {

  }

  public addCategory(): void {

    const data: IManageCategoryModalComponentInput = {
      category: null
    };

    const dialogRef = this._dialog.open(ManageCategoryModalComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe((result: ICategory) => {
      if (result != null) {
        this.categories.push(result);
      }
    });
  }

  public editCategory(): void {

    const data: IManageCategoryModalComponentInput = {
      category: Object.assign({}, this.currentCategory)
    };

    const dialogRef = this._dialog.open(ManageCategoryModalComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe((result: ICategory) => {
      if (result != null) {
        this.currentCategory.title = result.title;
        this.currentCategory.image = result.image;
      }
    });
  }

  public removeCategory(): void {
    if (this.currentCategory === null) {
      return;
    }

    this._categoriesService
      .deleteCategory(this.currentCategory.id)
      .subscribe(
        () => {
          const index: number = this.categories.findIndex(x => x.id === this.currentCategory.id);
          this.categories.splice(index, 1);
          this.currentCategory = null;
        },
        () => {

        }
      );
  }

  public addChannel(): void {
    const data: IManageRssChannelModalComponentInput = {
      channel: null
    };

    const dialogRef = this._dialog.open(ManageRssChannelModalComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe((result: IRssChannel) => {
      if (result != null) {
        this.currentCategory.channels.push(result);
      }
    });
  }

  public editChannel(): void {
    const data: IManageRssChannelModalComponentInput = {
      channel: Object.assign({}, this.currentChannel)
    };

    const dialogRef = this._dialog.open(ManageRssChannelModalComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe((result: IRssChannel) => {
      if (result != null) {
        this.currentChannel.source = result.source;
      }
    });
  }

  private _createSubscriptionForSelection(): void {
    this.categoriesList.selectionChange.subscribe((option: MatSelectionListChange) => {
      this.categoriesList.deselectAll();
      option.option.selected = true;
      this.currentCategory = option.option.value;
    });

    this.channelsList.selectionChange.subscribe((option: MatSelectionListChange) => {
      this.channelsList.deselectAll();
      option.option.selected = true;
      this.currentChannel = option.option.value;
    });
  }

  get isCategoryActionDisabled(): boolean {
    return this.currentCategory === null ? true : null;
  }

  get isChannelActionDisabled(): boolean {
    return this.currentChannel === null ? true : null;
  }
}
