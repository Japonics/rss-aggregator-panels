import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpClientService {

  private _token: string = null;

  constructor(private _httpClient: HttpClient) {
  }

  public loadToken(token: string): void {
    this._token = token;
  }

  public clearToken(): void {
    this._token = null;
  }

  public get(url: string): Observable<any> {
    return this._httpClient
      .get(url, this._prepareOptions());
  }

  public post(url: string, data: any): Observable<any> {
    return this._httpClient
      .post(url, data, this._prepareOptions());
  }

  public put(url: string, data: any): Observable<any> {
    return this._httpClient
      .put(url, data, this._prepareOptions());
  }

  public delete(url: string): Observable<any> {
    return this._httpClient
      .delete(url, this._prepareOptions());
  }

  private _prepareOptions(): object {
    if (this._token === null) {
      return {};
    }

    return {
      headers: {
        token: this._token
      }
    };
  }
}
