// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-rxjs',
//   templateUrl: './rxjs.component.html',
//   styleUrls: ['./rxjs.component.css']
// })
// export class RxjsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicesService } from '../services.service';
 
@Component({
 
  selector: 'app-rxjs',
   templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {
  title = 'RxJS Subjects Demo';
  observer1$: Subscription;
  observer2$: Subscription;
  observer3$: Subscription;
  observer1:number[] = [];
  observer2:number[] = [];
  observer3:number[] = [];
  showObserver1 = false;
  showObserver2 = false;
  showObserver3 = false;
 
  constructor(private appservice: ServicesService) {
 
  }
 
  subscribe1() {
    this.appservice.count$.subscribe(
      data => { this.observer1.push(data) },
      null,
      () => { this.showObserver1 = true; }
    )
  }
  susbcribe2() {
    this.appservice.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }
  susbcribe3() {
    this.appservice.count$.subscribe(
      data => { this.observer3.push(data) },
      null,
      () => { this.showObserver3 = true; }
    )
  }
 
  ngOnInit() {
 
  }
  ngOnDestroy() {
 
  }
 
}
