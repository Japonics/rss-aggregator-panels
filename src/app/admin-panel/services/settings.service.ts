import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClientService} from '../../core/services/http-client.service';
import {ISettingsService} from '../interfaces/settings-service.interface';
import {ISettings} from '../interfaces/settings.interface';
import {ISettingsDto} from '../interfaces/settings-dto.interface';
import {SETTINGS_ROUTES} from './settings.routes';

@Injectable()
export class SettingsService implements ISettingsService {

  constructor(private _httpService: HttpClientService) {
  }

  public getSettings(): Observable<ISettings> {
    return this._httpService
      .get(SETTINGS_ROUTES.getSettingsRoute())
      .pipe<ISettings, any>(
        map((response: ISettingsDto) => {
          return {
            interval: response.interval,
            id: response._id
          };
        }),
        catchError(err => throwError(err.error.message))
      );
  }

  public storeSettings(settings: ISettings): Observable<ISettings> {
    const settingsDto: ISettingsDto = {
      _id: settings.id,
      interval: settings.interval
    };

    return this._httpService
      .post(SETTINGS_ROUTES.storeSettingsRoute(), settingsDto)
      .pipe<ISettings, any>(
        map((item: ISettingsDto) => {
          return {
            id: item._id,
            interval: item.interval
          };
        }),
        catchError(err => throwError(err.error.message))
      );
  }
}
