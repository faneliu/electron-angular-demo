/*
 * @Descripttion: 
 * @Author: liufan
 * @Date: 2023-11-16 09:35:24
 * @LastEditors: liufan
 * @LastEditTime: 2024-03-28 16:29:01
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestCompComponent } from './components/test-comp/test-comp.component';
import { TestI18nCompComponent } from './components/test-i18n-comp/test-i18n-comp.component';
import { ListComponent } from './components/list/list.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    TestI18nCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    TestCompComponent,
    ListComponent,
    LayoutComponent,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
