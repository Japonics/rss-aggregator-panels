import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ICategory} from '../interfaces/category.interface';
import {catchError, map} from 'rxjs/operators';
import {HttpClientService} from '../../core/services/http-client.service';
import {ICategoryDto} from '../interfaces/category-dto.interface';
import {ISettingsService} from '../interfaces/settings-service.interface';
import {ISettings} from '../interfaces/settings.interface';
import {ISettingsDto} from '../interfaces/settings-dto.interface';

@Injectable()
export class SettingsService implements ISettingsService {

  constructor(private _httpService: HttpClientService) {
  }

  public getSettings(): Observable<ISettings> {
    return this._httpService
      .get('')
      .pipe<ISettings, any>(
        map((response: ISettingsDto) => {
          return {
            interval: response.interval
          };
        }),
        catchError(err => err)
      );
  }

  public storeSettings(settings: ISettings): Observable<ISettings> {
    const settingsDto: ISettingsDto = {
      interval: settings.interval
    };

    return this._httpService
      .post('', settingsDto)
      .pipe<ICategory, any>(
        map((item: ICategoryDto) => {
          return {
            id: item.id,
            image: item.image,
            title: item.title,
            channels: [],
            color: item.color
          };
        }),
        catchError(err => err)
      );
  }
}
