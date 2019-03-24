import {NgModule} from '@angular/core';

/**
 * Modules
 */
import {UIModule} from '../ui/ui.module';

/**
 * Components
 */
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
