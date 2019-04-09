import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthManagerService} from '../services/auth-manager.service';

@Injectable()
export class IsAdminGuard implements CanActivate {

  constructor(private _authManagerService: AuthManagerService) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(((resolve) => {
      this._authManagerService.isAdmin()
        .then(
          () => resolve(true),
          () => resolve(false)
        );
    }));
  }
}
