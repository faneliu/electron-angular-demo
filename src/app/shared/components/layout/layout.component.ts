/*
 * @Descripttion:
 * @Author: liufan
 * @Date: 2023-11-22 14:27:36
 * @LastEditors: liufan
 * @LastEditTime: 2023-12-22 11:25:03
 */
import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true
})
export class LayoutComponent {


  handleClick() {
    this.userService.getUsers().then((res) => {
      console.log(res);
      
    })

    this.userService.addNum();
  }
  constructor(public userService: UserService) {}
}
