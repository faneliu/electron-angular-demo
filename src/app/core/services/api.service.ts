/*
 * @Descripttion:
 * @Author: liufan
 * @Date: 2024-03-28 17:02:53
 * @LastEditors: liufan
 * @LastEditTime: 2024-04-06 23:05:04
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestBase } from 'src/app/common/request';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends RequestBase {

  // getFontList() {
  //   return this.get('font/list')
  // }


  getFontList(): Observable<any> {
    return this.normalGet('https://hellofont-global.oss-us-west-1.aliyuncs.com/Client/fontlist/sorted/oversea_all_fonts.json', {})
  }
}
