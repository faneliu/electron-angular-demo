import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestBase {
  protected baseUrl = 'http://your.api.domain';

  constructor(private http: HttpClient) {}

  protected get headers(): HttpHeaders {
    /*
     * for example, add an authorization token to each request,
     * take it from some CookieService, for example
     * */
    // const token: string = this.cookieService.get('token');
    // return new Headers({token: token});

    return new HttpHeaders();
  }

  protected get(relativeUrl: string, data: any): Observable<any> {
    return this.http.get(this.baseUrl + relativeUrl, {
      headers: this.headers,
      params: data,
    });
  }

  protected normalGet(url: string, body: any, options: any = {}) {
    return this.http.get(url, body)
  }

  protected post(relativeUrl: string, data: any) {
    return this.http.post(this.baseUrl + relativeUrl, {
      headers: this.headers,
      data,
    });
  }
}
