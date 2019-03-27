import {NgModule} from '@angular/core';
import {UIModule} from '../ui/ui.module';
import {AdminPanelOutletComponent} from './components/admin-panel-outlet/admin-panel-outlet.component';

@NgModule({
  imports: [
    UIModule
  ],
  providers: [],
  declarations: [
    AdminPanelOutletComponent
  ],
  exports: [],
})
export class AdminPanelModule {
}
