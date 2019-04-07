import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {IRssChannel} from '../../interfaces/rss-channel.interface';

export interface IManageRssChannelModalComponentInput {
  channel: IRssChannel;
}

@Component({
  selector: 'app-manage-rss-channel-modal',
  templateUrl: './manage-rss-channel-modal.component.html',
  styleUrls: ['./manage-rss-channel-modal.component.scss']
})
export class ManageRssChannelModalComponent {

  constructor(public dialogRef: MatDialogRef<ManageRssChannelModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IManageRssChannelModalComponentInput) {
  }

  public save(): void {

  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
