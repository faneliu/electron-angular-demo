/*
 * @Descripttion: 
 * @Author: liufan
 * @Date: 2023-12-03 22:47:53
 * @LastEditors: liufan
 * @LastEditTime: 2023-12-22 12:21:59
 */
import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@ngneat/transloco";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string) {
        return this.http.get<Translation>(`./assets/i18n/${lang}.json`);
    }
}
