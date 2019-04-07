import {NgModule} from '@angular/core';
import {UIModule} from '../ui/ui.module';
import {AdminPanelOutletComponent} from './components/admin-panel-outlet/admin-panel-outlet.component';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {RssChannelsSettingsComponent} from './components/rss-channels-settings/rss-channels-settings.component';
import {MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatListModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ManageCategoryModalComponent} from './components/manage-category-modal/manage-category-modal.component';
import {ManageRssChannelModalComponent} from './components/manage-rss-channel-modal/manage-rss-channel-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CategoriesMockService} from './services/categories-mock.service';
import {CategoriesService} from './services/categories.service';

@NgModule({
  imports: [
    UIModule,
    MatCardModule,
    MatListModule,
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoriesMockService,
    CategoriesService
  ],
  declarations: [
    AdminPanelOutletComponent,
    AdminDashboardComponent,
    RssChannelsSettingsComponent,
    ManageCategoryModalComponent,
    ManageRssChannelModalComponent
  ],
  exports: [],
  entryComponents: [
    ManageCategoryModalComponent,
    ManageRssChannelModalComponent
  ]
})
export class AdminPanelModule {
}
