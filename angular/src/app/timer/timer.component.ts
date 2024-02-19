import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})

export class TimerComponent {
  time: number = 0.00;
  interval: any;
  started: boolean = false
  fullTime: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  progressPercent: number = 0;

  onChange(event: Event) {
    this.time = parseInt((event.target as HTMLInputElement).value)
  }

  start() {
    this.started = true
    this.fullTime = this.time
    this.interval = setInterval(() => {
      this.time -= 0.1;
      this.progressPercent = 100 - this.time / this.fullTime * 100;
      console.log(100 - this.time / this.fullTime * 100)
      this.setTimes()
      if (this.time <= 0) {
         clearInterval(this.interval)
         this.seconds = 0
         this.progressPercent = 100
      }
    },100)
  }

  setTimes() {
    if (this.time > 60) {
      this.minutes = Math.floor(this.time / 60)
    }
    this.seconds = Math.floor(this.time % 60)
  }
}
