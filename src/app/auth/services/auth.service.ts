import {Injectable} from '@angular/core';
import {HttpClientService} from '../../core/services/http-client.service';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {IUser} from '../interfaces/user.interface';
import {IUserDto} from '../interfaces/user-dto.interface';
import {ICredentials} from '../interfaces/credentials.interface';
import {IAuthService} from '../interfaces/auth-service.interface';
import {AUTH_ROUTES} from './auth.routes';

@Injectable()
export class AuthService implements IAuthService {

  constructor(private _httpClientService: HttpClientService) {
  }

  public loadToken(token: string): void {
    this._httpClientService.loadToken(token);
  }

  public login(credentials: ICredentials): Observable<IUser> {
    return this._httpClientService
      .post(AUTH_ROUTES.loginRoute(), credentials)
      .pipe<IUser, any>(
        map((response: IUserDto) => {
          return {
            id: response._id,
            username: response.username,
            is_admin: response.is_admin
          };
        }),
        catchError(err => err)
      );
  }
}
