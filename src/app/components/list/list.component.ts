import { Component } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [ScrollingModule],
  standalone: true
})
export class ListComponent {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
}
