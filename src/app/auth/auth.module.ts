import {NgModule} from '@angular/core';
import {UIModule} from '../ui/ui.module';
import {AuthOutletComponent} from './components/auth-outlet/auth-outlet.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {AuthService} from './services/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    UIModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    AuthService
  ],
  declarations: [
    AuthOutletComponent,
    LoginFormComponent
  ],
  exports: [],
})
export class AuthModule {
}
