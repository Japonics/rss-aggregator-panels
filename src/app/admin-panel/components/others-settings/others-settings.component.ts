import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ISettings} from '../../interfaces/settings.interface';
import {NotificationService} from '../../../core/services/notification.service';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-others-settings',
  templateUrl: './others-settings.component.html',
  styleUrls: ['./others-settings.component.scss']
})
export class OthersSettingsComponent {

  public settingsForm: FormGroup;
  public errorOccurred: boolean = false;

  constructor(private _settingsService: SettingsService,
              private _notificationService: NotificationService) {
    this.settingsForm = new FormGroup({
      interval: new FormControl(60, [
        Validators.required,
        Validators.min(60),
        Validators.max(86400)
      ])
    });

    this._settingsService
      .getSettings()
      .subscribe(
        (settings: ISettings) => {
          this._processSettings(settings);
        },
        (error: string) => {
          this.errorOccurred = true;
          this._notificationService.showNotification({
            message: error,
            type: 'error',
            closeLabel: 'Ok :('
          });
        }
      );
  }

  public save(): void {
    const settings: ISettings = this.settingsForm.value;

    this._settingsService
      .storeSettings(settings)
      .subscribe(
        (updated: ISettings) => {
          this._processSettings(updated);
          this._notificationService.showNotification({
            message: 'Setting stored successfully :)',
            type: 'success',
            closeLabel: 'Done'
          });
        },
        (error: string) => {
          this._notificationService.showNotification({
            message: error,
            type: 'error',
            closeLabel: 'Ok :('
          });
        }
      );
  }

  private _processSettings(settings: ISettings): void {
    this.settingsForm.setValue({interval: settings.interval});
  }
}
