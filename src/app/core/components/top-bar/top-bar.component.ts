import {Component, EventEmitter, Output} from '@angular/core';
import {AuthManagerService} from '../../services/auth-manager.service';
import {IUser} from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  @Output() onToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  public user: IUser;

  constructor(private _authManagerService: AuthManagerService) {
    this.user = this._authManagerService.getUser();
  }

  /**
   * Handle toggle event
   *
   * @param event
   */
  public toggleSidenav(event): void {
    this.onToggle.next(true);
  }
}
