import {Injectable} from '@angular/core';
import {HttpClientService} from '../../core/services/http-client.service';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {IUser} from '../interfaces/user.interface';
import {IUserDto} from '../interfaces/user-dto.interface';
import {ICredentials} from '../interfaces/credentials.interface';

@Injectable()
export class AuthService {

  constructor(private _httpClientService: HttpClientService) {
  }

  public login(credentials: ICredentials): Observable<IUser> {
    return this._httpClientService
      .post('', credentials)
      .pipe<IUser, any>(
        map((response: IUserDto) => {
          return {
            id: response.id,
            username: response.username,
            isAdmin: response.isAdmin
          };
        }),
        catchError(err => err)
      );
  }
}
