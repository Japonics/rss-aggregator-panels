import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ICategory} from '../interfaces/category.interface';
import {ICategoriesService} from '../interfaces/categories-service.interface';
import {delay} from 'rxjs/operators';

@Injectable()
export class CategoriesMockService implements ICategoriesService {

  constructor() {
  }

  public getCategories(): Observable<ICategory[]> {
    const categories: ICategory[] = [];

    categories.push({
      id: '1',
      image: 'https://tunisia-technology.com/wp-content/uploads/2017/12/S%C3%A9curit%C3%A9-1.jpg',
      title: 'Electronic'
    });
    categories.push({
      id: '1',
      image: 'http://firma.um.warszawa.pl/wp-content/uploads/2018/10/page_5_social_media-670x376.jpg',
      title: 'Social media'
    });
    categories.push({
      id: '1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi83etHhVixHmbI8YfJcwrm-JC4CWwXav0or5NzeyVbXByu9RQ',
      title: 'Health'
    });
    categories.push({
      id: '1',
      image: 'http://www.progressivesports.co.uk/wp-content/uploads/2017/12/People-Sport.jpg',
      title: 'Sport'
    });
    categories.push({
      id: '1',
      image: 'https://cdn-images-1.medium.com/max/2600/1*0p2ehkHPz0YKhTHTDh4Xjg.jpeg',
      title: 'IT'
    });
    categories.push({
      id: '1',
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      title: 'Politic'
    });
    categories.push({
      id: '1',
      image: 'http://www.progressivesports.co.uk/wp-content/uploads/2017/12/People-Sport.jpg',
      title: 'Sport'
    });
    categories.push({
      id: '1',
      image: 'https://cdn-images-1.medium.com/max/2600/1*0p2ehkHPz0YKhTHTDh4Xjg.jpeg',
      title: 'IT'
    });
    categories.push({
      id: '1',
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      title: 'Politic'
    });
    categories.push({
      id: '1',
      image: 'https://tunisia-technology.com/wp-content/uploads/2017/12/S%C3%A9curit%C3%A9-1.jpg',
      title: 'Electronic'
    });
    categories.push({
      id: '1',
      image: 'http://firma.um.warszawa.pl/wp-content/uploads/2018/10/page_5_social_media-670x376.jpg',
      title: 'Social media'
    });

    return of(categories).pipe(delay(2000));
  }
}
