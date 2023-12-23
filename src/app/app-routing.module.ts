/*
 * @Descripttion: 
 * @Author: liufan
 * @Date: 2023-11-16 09:35:24
 * @LastEditors: liufan
 * @LastEditTime: 2023-12-22 12:22:26
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
