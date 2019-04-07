import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserPanelOutletComponent} from './user-panel/components/user-panel-outlet/user-panel-outlet.component';
import {AdminPanelOutletComponent} from './admin-panel/components/admin-panel-outlet/admin-panel-outlet.component';
import {AuthOutletComponent} from './auth/components/auth-outlet/auth-outlet.component';
import {IsAuthorizedGuard} from './core/guards/is-authorized.guard';
import {IsAdminGuard} from './core/guards/is-admin.guard';
import {LoginFormComponent} from './auth/components/login-form/login-form.component';
import {ContentOutletComponent} from './core/components/content-outlet/content-outlet.component';
import {CategoriesListComponent} from './user-panel/components/categories-list/categories-list.component';
import {NewsListComponent} from './user-panel/components/news-list/news-list.component';
import {FavoritesPanelOutletComponent} from './user-panel/components/favorites-panel-outlet/favorites-panel-outlet.component';
import {FavoritesListComponent} from './user-panel/components/favorites-list/favorites-list.component';
import {AdminDashboardComponent} from './admin-panel/components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
    {
      path: 'login',
      component: AuthOutletComponent,
      children: [
        {path: '', component: LoginFormComponent}
      ]
    },
    {
      path: '',
      component: ContentOutletComponent,
      canActivate: [IsAuthorizedGuard],
      children: [
        {
          path: '',
          component: UserPanelOutletComponent,
          canActivate: [IsAuthorizedGuard],
          children: [
            {path: '', component: CategoriesListComponent},
            {path: 'category/:id', component: NewsListComponent}
          ]
        },
        {
          path: 'favorites',
          component: FavoritesPanelOutletComponent,
          children: [
            {path: '', component: FavoritesListComponent}
          ]
        },
        {
          path: 'admin',
          component: AdminPanelOutletComponent,
          canActivate: [IsAuthorizedGuard, IsAdminGuard],
          children: [
            {path: '', component: AdminDashboardComponent}
          ]
        }
      ]
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
