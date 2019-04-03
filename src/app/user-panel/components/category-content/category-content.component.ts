import {Component, Input} from '@angular/core';
import {ICategory} from '../../interfaces/category.interface';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.scss']
})
export class CategoryContentComponent {

  @Input() category: ICategory;

  constructor(private _domSanitizer: DomSanitizer) {
  }

  public prepareUrl(url: string): SafeStyle {
    return this._domSanitizer.bypassSecurityTrustStyle(`url('${url}')`);
  }
}
