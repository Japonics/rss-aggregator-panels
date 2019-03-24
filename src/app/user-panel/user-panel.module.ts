import {NgModule} from '@angular/core';
import {UIModule} from '../ui/ui.module';
import {UserPanelOutletComponent} from './components/user-panel-outlet/user-panel-outlet.component';

@NgModule({
  imports: [
    UIModule
  ],
  providers: [],
  declarations: [
    UserPanelOutletComponent
  ],
  exports: [],
})
export class UserPanelModule {
}
