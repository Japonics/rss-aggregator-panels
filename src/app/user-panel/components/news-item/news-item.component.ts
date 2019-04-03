import {Component, EventEmitter, Input, Output} from '@angular/core';
import {INews} from '../../interfaces/news.interface';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {NewsMockService} from '../../services/news-mock.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {

  @Input() news: INews;
  @Input() isFavorite: boolean = false;
  @Output() onRead: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _domSanitizer: DomSanitizer,
              private _newsService: NewsMockService) {
  }

  public openNews(): void {
    this.onRead.next(this.news.id);
    window.open(this.news.source);
  }

  public addToFavorites(): void {
    this._newsService
      .markAsFavorite(this.news.id)
      .subscribe(
        () => {
          this.news.is_favorite = true;
        },
        () => {
          // TODO add notoification
        }
      );
  }

  public markAsRead(): void {
    this.onRead.next(this.news.id);
  }

  public prepareUrl(url: string): SafeStyle {
    return this._domSanitizer.bypassSecurityTrustStyle(`url('${url}')`);
  }
}
