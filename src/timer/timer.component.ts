import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  isStart: boolean = false;
  timerInterval: any;

  action = '-';
  round = 0;
  second = 5;
  interval = 0;

  setTimer: string = '';

  constructor() {}

  ngOnInit() {}

  start() {
    this.isStart = true;
    let title = 'My Tabata Timer';
    document.getElementById('app').innerHTML = title;

    //const[setSeconds] = useState(0)

    let intervalId = setInterval(() => {
      if (this.round < 1) this.action = 'PREPARE';
      else if (this.round > 8) this.action = 'DONE!';
      else if (this.second > 10) this.action = 'DO IT!!!';
      else this.action = 'REST!';
      document.getElementById('app-action').innerHTML = this.action;
      if (this.round >= 1 && this.round <= 8) {
        document.getElementById('app-round').innerHTML = this.round.toString();
      } else {
        document.getElementById('app-round').innerHTML = '-';
      }
      if (this.round <= 8) {
        document.getElementById('app-time').innerHTML =
          this.second.toString() + 's';
      } else {
        document.getElementById('app-time').innerHTML = '-';
      }
      this.second -= 1;
      if (this.second == 0) {
        this.round += 1;
        this.second = 30;
      }
    }, 1000);
  }

  pause() {
    // need to implement logic
    this.isStart = false;

    clearInterval(this.timerInterval);
  }

  stop() {
    /*let intervalId = setInterval(() => {
      document.getElementById('app-time').innerHTML = '-';
      document.getElementById('app-round').innerHTML = '-';
    }, 1000); */
  }
}
