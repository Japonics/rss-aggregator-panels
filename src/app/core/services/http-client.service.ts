import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpClientService {

  constructor(private _httpClient: HttpClient) {}

  public get(url: string): Observable<any> {
    return this._httpClient
      .get(url);
  }

  public post(url: string, data: any): Observable<any> {
    return this._httpClient
      .post(url, data);
  }

  public put (url: string, data: any): Observable<any> {
    return this._httpClient
      .put(url, data);
  }
}
