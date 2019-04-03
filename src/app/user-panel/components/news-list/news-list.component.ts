import {Component} from '@angular/core';
import {INews} from '../../interfaces/news.interface';
import {NewsMockService} from '../../services/news-mock.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {

  public news: INews[] = [];
  public categoryID: string;
  public isLoading: boolean = true;

  constructor(private _newsService: NewsMockService,
              private _activatedRoute: ActivatedRoute) {
    this.categoryID = this._activatedRoute.parent.snapshot.params['id'];
    this._newsService
      .getNews(this.categoryID)
      .subscribe(
        (news: INews[]) => {
          this.news = news;
          this.isLoading = false;
        },
        () => {}
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
        () => {
          // TODO add notoification
        }
      );
  }
}
