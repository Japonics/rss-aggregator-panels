import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IChannelsService} from '../interfaces/channels-service.interface';
import {IRssChannel} from '../interfaces/rss-channel.interface';
import {randomStringGenerator} from '../../core/functions/random-string-generator.function';

@Injectable()
export class ChannelsMockService implements IChannelsService {

  constructor() {
  }

  public createChannel(channel: IRssChannel): Observable<IRssChannel> {
    channel.id = randomStringGenerator(10);
    return of(channel);
  }

  public updateChannel(channel: IRssChannel): Observable<IRssChannel> {
    return of(channel);
  }

  public deleteChannel(channelID: string): Observable<any> {
    return of(channelID);
  }
}
