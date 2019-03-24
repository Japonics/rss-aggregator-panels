import {Injectable} from '@angular/core';
import {HttpClientService} from '../../core/services/http-client.service';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {IUser} from '../interfaces/user.interface';
import {IUserDto} from '../interfaces/user-dto.interface';
import {ICredentials} from '../interfaces/credentials.interface';
import {IAuthService} from '../interfaces/auth-service.interface';

@Injectable()
export class AuthMockService implements IAuthService {

  constructor() {
  }

  public login(credentials: ICredentials): Observable<IUser> {
    const user: IUser = {
      isAdmin: false,
      username: credentials.username,
      id: 'abcdefghsiasdniasudnsiuad'
    };

    if (credentials.username === 'admin') {
      user.isAdmin = true;
    }

    return of(user);
  }
}
