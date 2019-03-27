import {NgModule} from '@angular/core';
import {UIModule} from '../ui/ui.module';
import {AuthOutletComponent} from './components/auth-outlet/auth-outlet.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {AuthService} from './services/auth.service';
import {AuthMockService} from './services/auth-mock.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    UIModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
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
