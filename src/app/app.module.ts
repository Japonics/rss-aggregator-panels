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
import {ContentOutletComponent} from './core/components/content-outlet/content-outlet.component';
import {TopBarComponent} from './core/components/top-bar/top-bar.component';
import {MatButtonModule, MatIconModule, MatSidenavModule} from '@angular/material';
import {HttpClientService} from './core/services/http-client.service';
import {NotificationService} from './core/services/notification.service';
import {HttpClientModule} from '@angular/common/http';
import {CommunicationService} from './core/services/communication.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UIModule,
    AuthModule,
    AdminPanelModule,
    UserPanelModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    ContentOutletComponent,
    TopBarComponent
  ],
  providers: [
    IsAdminGuard,
    IsAuthorizedGuard,
    AuthManagerService,
    HttpClientService,
    NotificationService,
    CommunicationService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
