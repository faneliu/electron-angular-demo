import { Injectable } from '@angular/core';
import { RequestBase } from 'src/app/common/request';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends RequestBase {

  getFontList() {
    return this.get('font/list')
  }
}
