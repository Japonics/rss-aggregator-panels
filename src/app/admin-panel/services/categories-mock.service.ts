import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ICategory} from '../interfaces/category.interface';
import {delay} from 'rxjs/operators';
import {ICategoriesService} from '../interfaces/categories-service.interface';
import {IRssChannel} from '../interfaces/rss-channel.interface';

@Injectable()
export class CategoriesMockService implements ICategoriesService {

  constructor() {
  }

  public getCategories(): Observable<ICategory[]> {
    const categories: ICategory[] = [];

    const channels: IRssChannel[] = [
      {
        id: '1',
        source: 'https://tunisia-technology.com'
      },
      {
        id: '2',
        source: 'http://firma.um.warszawa.pl'
      },
      {
        id: '3',
        source: 'https://encrypted-tbn0.gstatic.com'
      },
      {
        id: '4',
        source: 'https://tunisia-technology.com'
      }
    ];

    categories.push({
      id: '1',
      image: 'https://tunisia-technology.com/wp-content/uploads/2017/12/S%C3%A9curit%C3%A9-1.jpg',
      title: 'Electronic',
      channels: channels.map(item => Object.assign({}, item)),
      color: '#f0f'
    });
    categories.push({
      id: '1',
      image: 'http://firma.um.warszawa.pl/wp-content/uploads/2018/10/page_5_social_media-670x376.jpg',
      title: 'Social media',
      channels: channels.map(item => Object.assign({}, item)),
      color: '#f0f'
    });
    categories.push({
      id: '1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi83etHhVixHmbI8YfJcwrm-JC4CWwXav0or5NzeyVbXByu9RQ',
      title: 'Health',
      channels: channels.map(item => Object.assign({}, item)),
      color: '#f0f'
    });
    categories.push({
      id: '1',
      image: 'http://www.progressivesports.co.uk/wp-content/uploads/2017/12/People-Sport.jpg',
      title: 'Sport',
      channels: channels.map(item => Object.assign({}, item)),
      color: '#f0f'
    });
    categories.push({
      id: '1',
      image: 'https://cdn-images-1.medium.com/max/2600/1*0p2ehkHPz0YKhTHTDh4Xjg.jpeg',
      title: 'IT',
      channels: channels.map(item => Object.assign({}, item)),
      color: '#f0f'
    });
    categories.push({
      id: '1',
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      title: 'Politic',
      channels: channels.map(item => Object.assign({}, item)),
      color: '#f0f'
    });
    categories.push({
      id: '1',
      image: 'http://www.progressivesports.co.uk/wp-content/uploads/2017/12/People-Sport.jpg',
      title: 'Sport',
      channels: channels.map(item => Object.assign({}, item)),
      color: '#f0f'
    });
    categories.push({
      id: '1',
      image: 'https://cdn-images-1.medium.com/max/2600/1*0p2ehkHPz0YKhTHTDh4Xjg.jpeg',
      title: 'IT',
      channels: channels.map(item => Object.assign({}, item)),
      color: '#f0f'
    });
    categories.push({
      id: '1',
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      title: 'Politic',
      channels: channels.map(item => Object.assign({}, item)),
      color: '#f0f'
    });
    categories.push({
      id: '1',
      image: 'https://tunisia-technology.com/wp-content/uploads/2017/12/S%C3%A9curit%C3%A9-1.jpg',
      title: 'Electronic',
      channels: channels.map(item => Object.assign({}, item)),
      color: '#f0f'
    });
    categories.push({
      id: '1',
      image: 'http://firma.um.warszawa.pl/wp-content/uploads/2018/10/page_5_social_media-670x376.jpg',
      title: 'Social media',
      channels: channels.map(item => Object.assign({}, item)),
      color: '#f0f'
    });

    return of(categories).pipe(delay(2000));
  }

  public createCategory(category: ICategory): Observable<ICategory> {
    return of(category);
  }

  public updateCategory(category: ICategory): Observable<ICategory> {
    return of(category);
  }

  public deleteCategory(categoryID: string): Observable<any> {
    return of(true);
  }
}
