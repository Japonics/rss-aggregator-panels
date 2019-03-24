import {NgModule} from '@angular/core';
import {UIModule} from '../ui/ui.module';
import {AuthOutletComponent} from './components/auth-outlet/auth-outlet.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {AuthService} from './services/auth.service';
import {AuthMockService} from './services/auth-mock.service';

@NgModule({
  imports: [
    UIModule
  ],
  providers: [
    AuthService,
    AuthMockService
  ],
  declarations: [
    AuthOutletComponent,
    LoginFormComponent
  ],
  exports: [],
})
export class AuthModule {
}
