import {Component, ViewChild} from '@angular/core';
import {ICategory} from '../../interfaces/category.interface';
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
import {NotificationService} from '../../../core/services/notification.service';
import {CategoriesService} from '../../services/categories.service';
import {ChannelsService} from '../../services/channels.service';

@Component({
  selector: 'app-rss-channels-settings',
  templateUrl: './rss-channels-settings.component.html',
  styleUrls: ['./rss-channels-settings.component.scss']
})
export class RssChannelsSettingsComponent {

  @ViewChild('categoriesList', {read: MatSelectionList}) categoriesList: MatSelectionList;
  @ViewChild('channelsList', {read: MatSelectionList}) channelsList: MatSelectionList;

  public categories: ICategory[] = [];
  public currentCategory: ICategory = null;
  public currentChannel: IRssChannel = null;
  public isLoading: boolean = true;
  public errorOccurred: boolean = false;

  constructor(private _categoriesService: CategoriesService,
              private _notificationService: NotificationService,
              private _channelsService: ChannelsService,
              private _dialog: MatDialog) {
    this._categoriesService
      .getCategories()
      .subscribe(
        (categories: ICategory[]) => {
          this.categories = categories;
          this._createSubscriptionForSelection();
        },
        (error: string) => {
          this.isLoading = false;
          this.errorOccurred = true;
          this._notificationService.showNotification({
            message: error,
            type: 'error',
            closeLabel: 'Ok :('
          });
        }
      );

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
    if (!this.currentCategory) {
      return;
    }

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
    if (!this.currentCategory) {
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
        (error: string) => {
          this._notificationService.showNotification({
            message: error,
            type: 'error',
            closeLabel: 'Ok :('
          });
        }
      );
  }

  public addChannel(): void {
    const data: IManageRssChannelModalComponentInput = {
      channel: null,
      categoryID: this.currentCategory.id
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
    if (!this.currentChannel) {
      return;
    }

    const data: IManageRssChannelModalComponentInput = {
      channel: Object.assign({}, this.currentChannel),
      categoryID: this.currentCategory.id
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

  public removeChannel(): void {
    if (!this.currentChannel) {
      return;
    }

    this._channelsService
      .deleteChannel(this.currentChannel.id)
      .subscribe(
        () => {
          const index: number = this.currentCategory.channels
            .findIndex(x => x.id === this.currentChannel.id);

          this.currentCategory.channels.splice(index, 1);
          this.currentChannel = null;
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

    this.isLoading = false;
  }

  get isCategoryActionDisabled(): boolean {
    return this.currentCategory === null ? true : null;
  }

  get isChannelActionDisabled(): boolean {
    return this.currentChannel === null ? true : null;
  }
}
