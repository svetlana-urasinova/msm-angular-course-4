import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'practice-4-even-odd';

  public numbers: number[] = [];

  public onNumberAdded(newNumber: number) {
    this.numbers.push(newNumber);
  }

  public onClear() {
    this.numbers.length = 0;
  }
}
