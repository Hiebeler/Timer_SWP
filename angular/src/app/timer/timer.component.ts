import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})

export class TimerComponent {
  time: number = 0;
  interval: any;
  
  onChange(event: Event) {
    this.time = parseInt((event.target as HTMLInputElement).value)
  }

  start() {
    this.interval = setInterval(() => {
      this.time--;
      if (this.time == 0) {
         clearInterval(this.interval) 
      }
    },1000)
  }
}
