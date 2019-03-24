import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
/**
 * Components
 */
import {UserPanelOutletComponent} from './user-panel/components/user-panel-outlet/user-panel-outlet.component';

const routes: Routes = [
    {
      path: 'login',
      component: null
    },
    {
      path: '',
      component: UserPanelOutletComponent,
      children: []
    },
    {
      path: 'admin',
      component: null,
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
