import {Injectable} from '@angular/core';
import {IUser} from '../../auth/interfaces/user.interface';
import {USER_STORAGE_KEY} from '../types/app.constants';
import {HttpClientService} from './http-client.service';

@Injectable()
export class AuthManagerService {

  private _user: IUser = null;

  constructor(private _httpClientService: HttpClientService) {

  }

  public getUser(): IUser {
    return Object.assign({}, this._user);
  }

  public loginUser(user: IUser): void {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    this._user = Object.assign({}, user);
  }

  public logout(): Promise<boolean> {
    return new Promise(((resolve) => {
      localStorage.removeItem(USER_STORAGE_KEY);
      this._user = null;
      resolve(true);
    }));
  }

  public isAuthorized(): Promise<boolean> {
    return new Promise(((resolve, reject) => {

      const user: string = localStorage.getItem(USER_STORAGE_KEY);

      if (user === null) {
        reject(false);
      }

      this._user = JSON.parse(user);
      this._httpClientService.loadToken(this._user.id);
      resolve(true);
    }));
  }

  public isAdmin(): Promise<boolean> {
    return new Promise(((resolve, reject) => {

      if (this._user === null) {
        const user: string = localStorage.getItem(USER_STORAGE_KEY);

        if (user === null) {
          reject(false);
        }

        this._user = JSON.parse(user);
      }

      if (this._user.is_admin) {
        resolve(true);
      }

      reject(false);
    }));
  }
}
