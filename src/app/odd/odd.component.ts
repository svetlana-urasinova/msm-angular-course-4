import { Component, Input } from '@angular/core';

@Component({
  selector: 'odd-number',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss'],
})
export class OddComponent {
  @Input() public numbers: number[] = [];
}
