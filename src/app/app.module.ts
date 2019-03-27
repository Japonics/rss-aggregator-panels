import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {UIModule} from './ui/ui.module';
import {AuthModule} from './auth/auth.module';
import {AdminPanelModule} from './admin-panel/admin-panel.module';
import {UserPanelModule} from './user-panel/user-panel.module';
import {AppComponent} from './app.component';
import {IsAdminGuard} from './core/guards/is-admin.guard';
import {IsAuthorizedGuard} from './core/guards/is-authorized.guard';
import {AuthManagerService} from './core/services/auth-manager.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UIModule,
    AuthModule,
    AdminPanelModule,
    UserPanelModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    IsAdminGuard,
    IsAuthorizedGuard,
    AuthManagerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
