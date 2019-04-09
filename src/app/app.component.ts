import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {NotificationService} from './core/services/notification.service';
import {INotification} from './core/interfaces/notification.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _snackBar: MatSnackBar,
              private _notificationService: NotificationService) {
    this._notificationService.getSubscriber.subscribe((notification: INotification) => {
      this.openSnackBar(notification);
    });
  }

  public openSnackBar(notification: INotification): void {
    this._snackBar.open(notification.message, notification.closeLabel, {
      duration: 50000,
      panelClass: notification.type
    });
  }
}
