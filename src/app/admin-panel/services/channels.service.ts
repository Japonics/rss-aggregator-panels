import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClientService} from '../../core/services/http-client.service';
import {IRssChannelDto} from '../interfaces/rss-channel-dto.interface';
import {IChannelsService} from '../interfaces/channels-service.interface';
import {IRssChannel} from '../interfaces/rss-channel.interface';
import {CHANNELS_ROUTES} from './channels.routes';

@Injectable()
export class ChannelsService implements IChannelsService {

  constructor(private _httpService: HttpClientService) {
  }

  public createChannel(channel: IRssChannel): Observable<IRssChannel> {
    const channelDto: IRssChannelDto = {
      id: null,
      source: channel.source
    };

    return this._httpService
      .post(CHANNELS_ROUTES.createChannelRoute(), channelDto)
      .pipe<IRssChannel, any>(
        map((item: IRssChannelDto) => {
          return {
            id: item.id,
            source: item.source
          };
        }),
        catchError(err => err)
      );
  }

  public updateChannel(channel: IRssChannel): Observable<IRssChannel> {
    const channelDto: IRssChannelDto = {
      id: channel.id,
      source: channel.source
    };

    return this._httpService
      .put(CHANNELS_ROUTES.updateChannelRoute(channelDto.id), channelDto)
      .pipe<IRssChannel, any>(
        map((item: IRssChannelDto) => {
          return {
            id: item.id,
            source: item.source
          };
        }),
        catchError(err => err)
      );
  }

  public deleteChannel(channelID: string): Observable<any> {
    return this._httpService
      .delete(CHANNELS_ROUTES.deleteChannelRoute(channelID))
      .pipe(
        map(item => item),
        catchError(err => err)
      );
  }
}
