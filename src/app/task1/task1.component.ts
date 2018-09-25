import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  isTaskStarted = false;
  counters = [];
  currentValue = 1;
  constructor() { }

  ngOnInit() {
  }
  startCounter() {

    const $subscriber = interval(1000).subscribe((counter) => {
      if (counter === 100) {
        $subscriber.unsubscribe();
        this.isTaskStarted = false;
      } else {
        this.counters.push(this.getCounterValue(counter + 1));
      }
    });
    this.isTaskStarted = true;
  }
  getCounterValue(counter) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      return 'Eagle Creek';
    } else if (counter % 3 === 0) {
      return 'Eagle';
    } else if (counter % 5 === 0) {
      return 'Creek';
    }
    return counter;
  }

}
