import {Injectable} from '@angular/core';
import {IUser} from '../../auth/interfaces/user.interface';

@Injectable()
export class AuthManagerService {

  private _user: IUser = null;

  public getUser(): IUser {
    return Object.assign({}, this._user);
  }

  public isAuthorized(): Promise<boolean> {
    return new Promise(((resolve, reject) => {

      const user: string = localStorage.getItem('user');

      if (user === null) {
        reject(false);
      }

      this._user = JSON.parse(user);
      resolve(true);
    }));
  }
}
