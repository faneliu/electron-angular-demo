/*
 * @Descripttion: 
 * @Author: liufan
 * @Date: 2023-12-21 17:44:50
 * @LastEditors: liufan
 * @LastEditTime: 2023-12-22 10:45:48
 */
import { Translation, TranslocoTranspiler } from '@ngneat/transloco';

export class TranslocoCustomTranspiler implements TranslocoTranspiler {
  transpile(value: any, params: any, translation: Translation, key: string) {
    return value || ''
  }
}