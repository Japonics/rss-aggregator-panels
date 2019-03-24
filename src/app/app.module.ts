import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {UIModule} from './ui/ui.module';
import {AuthModule} from './auth/auth.module';
import {AdminPanelModule} from './admin-panel/admin-panel.module';
import {UserPanelModule} from './user-panel/user-panel.module';
import {AppComponent} from './app.component';

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
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
