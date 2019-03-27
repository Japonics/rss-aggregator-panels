import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthManagerService} from '../services/auth-manager.service';

@Injectable()
export class IsAuthorizedGuard implements CanActivate {

  constructor(private _authManagerService: AuthManagerService,
              private _router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(((resolve) => {
      this._authManagerService.isAuthorized()
        .then(
          () => resolve(true),
          () => {
            this._router.navigate(['/login'])
              .then(
                () => resolve(false),
              );
          }
        );
    }));
  }
}
