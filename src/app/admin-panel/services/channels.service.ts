import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
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
      _id: null,
      source: channel.source,
      category_id: channel.category_id
    };

    return this._httpService
      .post(CHANNELS_ROUTES.createChannelRoute(), channelDto)
      .pipe<IRssChannel, any>(
        map((item: IRssChannelDto) => {
          return {
            id: item._id,
            source: item.source,
            category_id: item.category_id
          };
        }),
        catchError(err => throwError(err.error.message))
      );
  }

  public updateChannel(channel: IRssChannel): Observable<IRssChannel> {
    const channelDto: IRssChannelDto = {
      _id: channel.id,
      source: channel.source,
      category_id: channel.category_id
    };

    return this._httpService
      .put(CHANNELS_ROUTES.updateChannelRoute(channelDto._id), channelDto)
      .pipe<IRssChannel, any>(
        map((item: IRssChannelDto) => {
          return {
            id: item._id,
            source: item.source,
            category_id: item.category_id
          };
        }),
        catchError(err => throwError(err.error.message))
      );
  }

  public deleteChannel(channelID: string): Observable<any> {
    return this._httpService
      .delete(CHANNELS_ROUTES.deleteChannelRoute(channelID))
      .pipe(
        map(item => item),
        catchError(err => throwError(err.error.message))
      );
  }
}
