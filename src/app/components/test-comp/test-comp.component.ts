/*
 * @Descripttion: 
 * @Author: liufan
 * @Date: 2023-11-18 16:59:48
 * @LastEditors: liufan
 * @LastEditTime: 2023-12-22 10:50:29
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss'],
  standalone: true,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserService]
})
export class TestCompComponent {
  @Input() vData: any;
  @Input() count= 0;
  
  constructor(public userService: UserService) {

  }

  handleClick() {
    this.userService.addNum();
  }
}
