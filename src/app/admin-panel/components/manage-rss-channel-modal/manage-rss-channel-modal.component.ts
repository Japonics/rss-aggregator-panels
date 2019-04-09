import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {IRssChannel} from '../../interfaces/rss-channel.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../../core/services/notification.service';
import {ChannelsMockService} from '../../services/channels-mock.service';

export interface IManageRssChannelModalComponentInput {
  channel: IRssChannel;
}

@Component({
  selector: 'app-manage-rss-channel-modal',
  templateUrl: './manage-rss-channel-modal.component.html',
  styleUrls: ['./manage-rss-channel-modal.component.scss']
})
export class ManageRssChannelModalComponent {

  public manageForm: FormGroup;
  public isNew: boolean = true;

  constructor(public dialogRef: MatDialogRef<ManageRssChannelModalComponent>,
              private _channelsService: ChannelsMockService,
              private _notificationService: NotificationService,
              @Inject(MAT_DIALOG_DATA) public data: IManageRssChannelModalComponentInput) {

    if (this.data.channel) {
      this.isNew = false;
    }

    this.manageForm = new FormGroup({
      source: new FormControl(!this.isNew ? this.data.channel.source : '', [
        Validators.pattern('^((http:\\/\\/|https:\\/\\/)[a-zA-Z0-9\\-.\\/]{1,})'),
        Validators.required
      ])
    });
  }

  public save(): void {
    if (!this.manageForm.valid) {
      return;
    }

    const data: IRssChannel = this.manageForm.value;

    if (!this.isNew) {
      data.id = this.data.channel.id;
    }

    if (this.isNew) {
      this._channelsService
        .createChannel(data)
        .subscribe(
          (channel: IRssChannel) => {
            this.dialogRef.close(channel);
          },
          (error: string) => {
            this._notificationService.showNotification({
              message: error,
              type: 'error',
              closeLabel: 'Ok :('
            });
          }
        );
    } else {
      this._channelsService
        .updateChannel(data)
        .subscribe(
          (channel: IRssChannel) => {
            this.dialogRef.close(channel);
          },
          (error: string) => {
            this._notificationService.showNotification({
              message: error,
              type: 'error',
              closeLabel: 'Ok :('
            });
          }
        );
    }
  }

  public cancel(): void {
    this.dialogRef.close(null);
  }
}
