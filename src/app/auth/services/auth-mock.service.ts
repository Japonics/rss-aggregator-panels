import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IUser} from '../interfaces/user.interface';
import {ICredentials} from '../interfaces/credentials.interface';
import {IAuthService} from '../interfaces/auth-service.interface';

@Injectable()
export class AuthMockService implements IAuthService {

  constructor() {
  }

  public loadToken(token: string): void {
    console.log(token);
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
