import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public evens: number[] = [];
  public odds: number[] = [];

  public onNumberAdded(newNumber: number) {
    if (newNumber % 2) {
      this.odds.push(newNumber);
    } else {
      this.evens.push(newNumber);
    }
  }

  public onClear() {
    this.evens.length = 0;
    this.odds.length = 0;
  }
}
