import {Component} from '@angular/core';
import {INews} from '../../interfaces/news.interface';
import {NewsMockService} from '../../services/news-mock.service';
import {ActivatedRoute} from '@angular/router';
import {NEWS_LIST_ANIMATION} from '../../../ui/animations/news-list.animation';
import {NotificationService} from '../../../core/services/notification.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  animations: NEWS_LIST_ANIMATION
})
export class NewsListComponent {

  public news: INews[] = [];
  public categoryID: string;
  public isLoading: boolean = true;
  public errorOccurred: boolean = false;

  constructor(private _newsService: NewsMockService,
              private _notificationService: NotificationService,
              private _activatedRoute: ActivatedRoute) {
    this.categoryID = this._activatedRoute.parent.snapshot.params['id'];
    this._newsService
      .getNews(this.categoryID)
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
            type: 'error',
            closeLabel: 'Ok :('
          });
        }
      );
  }

  public onNewsRead(newsID: string): void {
    this._newsService
      .markAsRead(newsID)
      .subscribe(
        () => {
          const index: number = this.news.findIndex(x => x.id === newsID);
          if (index >= 0) {
            this.news.splice(index, 1);
          }
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
