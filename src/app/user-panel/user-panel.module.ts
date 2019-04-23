import {NgModule} from '@angular/core';
import {UIModule} from '../ui/ui.module';
import {UserPanelOutletComponent} from './components/user-panel-outlet/user-panel-outlet.component';
import {CategoriesListComponent} from './components/categories-list/categories-list.component';
import {NewsListComponent} from './components/news-list/news-list.component';
import {CategoriesService} from './services/categories.service';
import {NewsService} from './services/news.service';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule, MatProgressSpinnerModule} from '@angular/material';
import {CategoryContentComponent} from './components/category-content/category-content.component';
import {NewsItemComponent} from './components/news-item/news-item.component';
import {FavoritesPanelOutletComponent} from './components/favorites-panel-outlet/favorites-panel-outlet.component';
import {FavoritesListComponent} from './components/favorites-list/favorites-list.component';

@NgModule({
  imports: [
    UIModule,
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    CategoriesService,
    NewsService
  ],
  declarations: [
    UserPanelOutletComponent,
    CategoriesListComponent,
    NewsListComponent,
    CategoryContentComponent,
    NewsItemComponent,
    FavoritesPanelOutletComponent,
    FavoritesListComponent
  ],
  exports: [],
})
export class UserPanelModule {
}
