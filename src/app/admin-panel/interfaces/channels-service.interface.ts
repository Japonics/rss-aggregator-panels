import {Observable} from 'rxjs';
import {IRssChannel} from './rss-channel.interface';

export interface IChannelsService {
  createChannel(channel: IRssChannel): Observable<IRssChannel>;
  updateChannel(channel: IRssChannel): Observable<IRssChannel>;
  deleteChannel(channelID: string): Observable<any>;
}
