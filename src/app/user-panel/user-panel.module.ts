import {NgModule} from '@angular/core';
import {UIModule} from '../ui/ui.module';
import {UserPanelOutletComponent} from './components/user-panel-outlet/user-panel-outlet.component';
import {CategoriesListComponent} from './components/categories-list/categories-list.component';
import {NewsListComponent} from './components/news-list/news-list.component';
import {CategoriesMockService} from './services/categories-mock.service';
import {CategoriesService} from './services/categories.service';
import {NewsMockService} from './services/news-mock.service';
import {NewsService} from './services/news.service';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    UIModule,
    CommonModule,
    RouterModule
  ],
  providers: [
    CategoriesMockService,
    CategoriesService,
    NewsMockService,
    NewsService
  ],
  declarations: [
    UserPanelOutletComponent,
    CategoriesListComponent,
    NewsListComponent
  ],
  exports: [],
})
export class UserPanelModule {
}
