import {ICategory} from '../../interfaces/category.interface';
import {CHANNELS_MOCKUP} from './channels.data';
import {randomStringGenerator} from '../../../core/functions/random-string-generator.function';

export const CATEGORIES_MOCKUP: ICategory[] = [
  {
    id: randomStringGenerator(15),
    image: 'https://tunisia-technology.com/wp-content/uploads/2017/12/S%C3%A9curit%C3%A9-1.jpg',
    title: 'Electronic',
    channels: CHANNELS_MOCKUP.map(item => Object.assign({}, item)),
    color: '#f0f'
  },
  {
    id: randomStringGenerator(15),
    image: 'http://firma.um.warszawa.pl/wp-content/uploads/2018/10/page_5_social_media-670x376.jpg',
    title: 'Social media',
    channels: CHANNELS_MOCKUP.map(item => Object.assign({}, item)),
    color: '#f0f'
  },
  {
    id: randomStringGenerator(15),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi83etHhVixHmbI8YfJcwrm-JC4CWwXav0or5NzeyVbXByu9RQ',
    title: 'Health',
    channels: CHANNELS_MOCKUP.map(item => Object.assign({}, item)),
    color: '#f0f'
  },
  {
    id: randomStringGenerator(15),
    image: 'http://www.progressivesports.co.uk/wp-content/uploads/2017/12/People-Sport.jpg',
    title: 'Sport',
    channels: CHANNELS_MOCKUP.map(item => Object.assign({}, item)),
    color: '#f0f'
  },
  {
    id: randomStringGenerator(15),
    image: 'https://cdn-images-1.medium.com/max/2600/1*0p2ehkHPz0YKhTHTDh4Xjg.jpeg',
    title: 'IT',
    channels: CHANNELS_MOCKUP.map(item => Object.assign({}, item)),
    color: '#f0f'
  },
  {
    id: randomStringGenerator(15),
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    title: 'Politic',
    channels: CHANNELS_MOCKUP.map(item => Object.assign({}, item)),
    color: '#f0f'
  },
  {
    id: randomStringGenerator(15),
    image: 'http://www.progressivesports.co.uk/wp-content/uploads/2017/12/People-Sport.jpg',
    title: 'Sport',
    channels: CHANNELS_MOCKUP.map(item => Object.assign({}, item)),
    color: '#f0f'
  },
  {
    id: randomStringGenerator(15),
    image: 'https://cdn-images-1.medium.com/max/2600/1*0p2ehkHPz0YKhTHTDh4Xjg.jpeg',
    title: 'IT',
    channels: CHANNELS_MOCKUP.map(item => Object.assign({}, item)),
    color: '#f0f'
  },
  {
    id: randomStringGenerator(15),
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    title: 'Politic',
    channels: CHANNELS_MOCKUP.map(item => Object.assign({}, item)),
    color: '#f0f'
  },
  {
    id: randomStringGenerator(15),
    image: 'https://tunisia-technology.com/wp-content/uploads/2017/12/S%C3%A9curit%C3%A9-1.jpg',
    title: 'Electronic',
    channels: CHANNELS_MOCKUP.map(item => Object.assign({}, item)),
    color: '#f0f'
  },
  {
    id: randomStringGenerator(15),
    image: 'http://firma.um.warszawa.pl/wp-content/uploads/2018/10/page_5_social_media-670x376.jpg',
    title: 'Social media',
    channels: CHANNELS_MOCKUP.map(item => Object.assign({}, item)),
    color: '#f0f'
  }
];

