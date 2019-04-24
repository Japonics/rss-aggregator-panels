import {Component, EventEmitter, Output} from '@angular/core';
import {AuthManagerService} from '../../services/auth-manager.service';
import {IUser} from '../../../auth/interfaces/user.interface';
import {CommunicationService} from '../../services/communication.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  @Output() onToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  public user: IUser;
  public isNewsRoute: boolean = false;

  constructor(private _authManagerService: AuthManagerService,
              private _communicationService: CommunicationService) {
    this.user = this._authManagerService.getUser();

    this._communicationService.onNewsRoute.subscribe((isActive: boolean) => {
      this.isNewsRoute = isActive;
    });
  }

  public toggleSidenav(): void {
    this.onToggle.next(true);
  }
}
