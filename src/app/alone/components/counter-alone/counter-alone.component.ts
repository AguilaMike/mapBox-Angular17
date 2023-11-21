import { Component, Input } from '@angular/core';

@Component({
  selector: 'alone-counter-alone',
  standalone: true,
  imports: [],
  templateUrl: './counter-alone.component.html',
  styleUrl: './counter-alone.component.scss'
})
export class CounterAloneComponent {
  @Input() public counter = 10;

  public increment() {
    this.counter++;
  }

  public decrement() {
    this.counter--;
  }
}
