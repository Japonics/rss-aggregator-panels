import {Component} from '@angular/core';
import {INews} from '../../interfaces/news.interface';
import {NewsMockService} from '../../services/news-mock.service';
import {NEWS_LIST_ANIMATION} from '../../../ui/animations/news-list.animation';
import {NotificationService} from '../../../core/services/notification.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss'],
  animations: NEWS_LIST_ANIMATION
})
export class FavoritesListComponent {

  public news: INews[] = [];
  public isLoading: boolean = true;
  public errorOccurred: boolean = false;

  constructor(private _newsService: NewsMockService,
              private _notificationService: NotificationService) {
    this._newsService
      .getFavoritesNews()
      .subscribe(
        (news: INews[]) => {
          this.news = news;
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

  public onRemovedFromFavorites(newsID: string): void {
    const index: number = this.news.findIndex(x => x.id === newsID);
    if (index >= 0) {
      this.news.splice(index, 1);
    }
  }
}
