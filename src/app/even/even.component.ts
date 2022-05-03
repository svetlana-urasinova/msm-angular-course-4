import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'even-number',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss'],
})
export class EvenComponent implements OnInit {
  @Input() public number: number;

  constructor() {}

  ngOnInit(): void {}
}
