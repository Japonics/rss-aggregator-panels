import {IRssChannelDto} from './rss-channel-dto.interface';

export interface ICategoryDto {
  id: string;
  title: string;
  image: string;
  channels: IRssChannelDto[];
  color: string;
}
