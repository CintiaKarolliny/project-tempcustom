import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TimerComponent],
  template: `
    <app-timer> </app-timer>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
