import { Component, Input } from '@angular/core';

@Component({
  selector: 'even-number',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss'],
})
export class EvenComponent {
  @Input() public numbers: number[] = [];
}
