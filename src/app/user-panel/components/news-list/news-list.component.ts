import {Component, OnInit, OnDestroy} from '@angular/core';
import {INews} from '../../interfaces/news.interface';
import {ActivatedRoute} from '@angular/router';
import {NEWS_LIST_ANIMATION} from '../../../ui/animations/news-list.animation';
import {NotificationService} from '../../../core/services/notification.service';
import {NewsService} from '../../services/news.service';
import {CommunicationService} from '../../../core/services/communication.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  animations: NEWS_LIST_ANIMATION
})
export class NewsListComponent implements OnInit, OnDestroy {

  public news: INews[] = [];
  public categoryID: string;
  public isLoading: boolean = true;
  public errorOccurred: boolean = false;

  constructor(private _newsService: NewsService,
              private _communicationService: CommunicationService,
              private _notificationService: NotificationService,
              private _activatedRoute: ActivatedRoute) {
    this.categoryID = this._activatedRoute.snapshot.params['id'];
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

  public ngOnInit(): void {
    this._communicationService.onNewsRoute.next(true);
  }

  public ngOnDestroy(): void {
    this._communicationService.onNewsRoute.next(false);
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
