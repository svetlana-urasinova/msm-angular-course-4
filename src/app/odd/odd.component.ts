import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'odd-number',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss'],
})
export class OddComponent implements OnInit {
  @Input() public numbers: number[] = [];

  constructor() {}

  ngOnInit(): void {}
}
