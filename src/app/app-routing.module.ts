import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
/**
 * Components
 */
import {UserPanelOutletComponent} from './user-panel/components/user-panel-outlet/user-panel-outlet.component';
import {AdminPanelOutletComponent} from './admin-panel/components/admin-panel-outlet/admin-panel-outlet.component';
import {AuthOutletComponent} from './auth/components/auth-outlet/auth-outlet.component';

const routes: Routes = [
    {
      path: 'login',
      component: AuthOutletComponent
    },
    {
      path: '',
      component: UserPanelOutletComponent,
      children: []
    },
    {
      path: 'admin',
      component: AdminPanelOutletComponent,
      children: []
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
