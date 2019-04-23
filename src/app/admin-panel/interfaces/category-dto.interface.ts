import {IRssChannelDto} from './rss-channel-dto.interface';

export interface ICategoryDto {
  _id: string;
  title: string;
  image: string;
  channels: IRssChannelDto[];
  color: string;
}
