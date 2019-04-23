import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpClientService {

  private _token: string = null;
  private _baseUrl: string = 'http://localhost:8000';

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
      .get(this._prepareUrl(url), this._prepareOptions());
  }

  public post(url: string, data: any): Observable<any> {
    return this._httpClient
      .post(this._prepareUrl(url), data, this._prepareOptions());
  }

  public put(url: string, data: any): Observable<any> {
    return this._httpClient
      .put(this._prepareUrl(url), data, this._prepareOptions());
  }

  public delete(url: string): Observable<any> {
    return this._httpClient
      .delete(this._prepareUrl(url), this._prepareOptions());
  }

  private _prepareUrl(url: string): string {
    return `${this._baseUrl}${url}`;
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
