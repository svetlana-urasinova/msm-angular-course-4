import { Component, OnInit, Output, EventEmitter } from '@angular/core';

const INTERVAL = 1000;

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
})
export class GameControlComponent implements OnInit {
  @Output() numberAdded = new EventEmitter<number>();
  @Output() clear = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public number = 0;

  public isGameActive = false;

  public startHandler(): void {
    if (!this.isGameActive) {
      this.isGameActive = true;
      this.ref = window.setInterval(() => {
        this.number++;
        this.numberAdded.emit(this.number);
      }, INTERVAL);
    }
  }

  public stopHandler(): void {
    if (this.isGameActive) {
      this.isGameActive = false;
      clearInterval(this.ref);
    }
  }

  public clearHandler(): void {
    this.number = 0;
    this.clear.emit();
  }

  private ref: number;
}
