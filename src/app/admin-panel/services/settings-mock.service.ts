import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ISettingsService} from '../interfaces/settings-service.interface';
import {ISettings} from '../interfaces/settings.interface';
import {ISettingsDto} from '../interfaces/settings-dto.interface';

@Injectable()
export class SettingsMockService implements ISettingsService {

  constructor() {
  }

  public getSettings(): Observable<ISettings> {
    return of({
      interval: 10000
    });
  }

  public storeSettings(settings: ISettings): Observable<ISettings> {
    const settingsDto: ISettingsDto = {
      interval: settings.interval
    };

    return of(settingsDto);
  }
}
