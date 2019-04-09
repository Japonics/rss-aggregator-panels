import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {INotification} from '../interfaces/notification.interface';

@Injectable()
export class NotificationService {

  private _onNotify: Subject<INotification> = new Subject<INotification>();

  constructor() {
  }

  public showNotification(notification: INotification): void {
    this._onNotify.next(notification);
  }

  get getSubscriber(): Subject<INotification> {
    return this._onNotify;
  }
}
