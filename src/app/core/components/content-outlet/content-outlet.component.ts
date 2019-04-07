import {Component, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material';
import {AuthManagerService} from '../../services/auth-manager.service';
import {IUser} from '../../../auth/interfaces/user.interface';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-content-outlet',
  templateUrl: './content-outlet.component.html',
  styleUrls: ['./content-outlet.component.scss']
})
export class ContentOutletComponent {

  @ViewChild('drawer', {read: MatDrawer}) drawer: MatDrawer;

  public user: IUser;
  public isAdmin: boolean = false;

  constructor(private _authManagerService: AuthManagerService,
              private _router: Router) {
    this.user = this._authManagerService.getUser();
    this.isAdmin = this.user.isAdmin;

    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.toggle(false);
      }
    });
  }

  public toggle(state: boolean): void {
    this.drawer.toggle().then();
  }

  public logout(): void {
    this._authManagerService
      .logout()
      .then(
        () => {
          this._router.navigate(['/login']).then();
        }
      );
  }
}
