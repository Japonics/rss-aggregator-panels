import {randomStringGenerator} from '../../../core/functions/random-string-generator.function';
import {IRssChannel} from '../../interfaces/rss-channel.interface';

export const CHANNELS_MOCKUP: IRssChannel[] = [
  {
    id: randomStringGenerator(10),
    source: 'https://tunisia-technology.com'
  },
  {
    id: randomStringGenerator(10),
    source: 'http://firma.um.warszawa.pl'
  },
  {
    id: randomStringGenerator(10),
    source: 'https://encrypted-tbn0.gstatic.com'
  },
  {
    id: randomStringGenerator(10),
    source: 'https://tunisia-technology.com'
  }
];
