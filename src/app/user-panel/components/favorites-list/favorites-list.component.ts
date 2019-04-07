import {Component} from '@angular/core';
import {INews} from '../../interfaces/news.interface';
import {NewsMockService} from '../../services/news-mock.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent {

  public news: INews[] = [];
  public categoryID: string;
  public isLoading: boolean = true;

  constructor(private _newsService: NewsMockService,
              private _activatedRoute: ActivatedRoute) {
    this.categoryID = this._activatedRoute.parent.snapshot.params['id'];
    this._newsService
      .getFavoritesNews(this.categoryID)
      .subscribe(
        (news: INews[]) => {
          this.news = news;
          this.isLoading = false;
        },
        () => {
        }
      );
  }
}
