import {Observable} from 'rxjs';
import {ISettings} from './settings.interface';

export interface ISettingsService {
  getSettings(): Observable<ISettings>;
  storeSettings(settings: ISettings): Observable<ISettings>;
}
