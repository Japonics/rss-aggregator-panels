import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class CommunicationService {

  public onNewsRoute: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }
}
