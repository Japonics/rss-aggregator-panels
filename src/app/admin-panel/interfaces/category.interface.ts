import {IRssChannel} from './rss-channel.interface';

export interface ICategory {
  id: string;
  title: string;
  image: string;
  color: string;
  channels: IRssChannel[];
}
