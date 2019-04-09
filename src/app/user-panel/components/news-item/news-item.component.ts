import {Component, EventEmitter, Input, Output} from '@angular/core';
import {INews} from '../../interfaces/news.interface';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {NewsMockService} from '../../services/news-mock.service';
import {NotificationService} from '../../../core/services/notification.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {

  @Input() news: INews;
  @Input() isFavorite: boolean = false;
  @Output() onRead: EventEmitter<string> = new EventEmitter<string>();
  @Output() onRemoveAsFavorite: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _domSanitizer: DomSanitizer,
              private _notificationService: NotificationService,
              private _newsService: NewsMockService) {
  }

  public openNews(): void {
    this.onRead.next(this.news.id);
    window.open(this.news.source);
  }

  public changeFavoriteState(): void {
    if (this.news.is_favorite) {
      this._newsService
        .removeAsFavorite(this.news.id)
        .subscribe(
          () => {
            this.news.is_favorite = false;
            this.onRemoveAsFavorite.next(this.news.id);
          },
          (error: string) => {
            this._notificationService.showNotification({
              message: error,
              closeLabel: 'Ok ;(',
              type: 'error'
            });
          }
        );
    } else {
      this._newsService
        .markAsFavorite(this.news.id)
        .subscribe(
          () => {
            this.news.is_favorite = true;
          },
          (error: string) => {
            this._notificationService.showNotification({
              message: error,
              closeLabel: 'Ok ;(',
              type: 'error'
            });
          }
        );
    }
  }

  public markAsRead(): void {
    this.onRead.next(this.news.id);
  }

  public prepareUrl(url: string): SafeStyle {
    return this._domSanitizer.bypassSecurityTrustStyle(`url('${url}')`);
  }
}
