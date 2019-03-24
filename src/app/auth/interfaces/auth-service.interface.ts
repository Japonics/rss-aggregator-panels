import {ICredentials} from './credentials.interface';
import {Observable} from 'rxjs';
import {IUser} from './user.interface';

export interface IAuthService {

  login(credentials: ICredentials): Observable<IUser>;

}
