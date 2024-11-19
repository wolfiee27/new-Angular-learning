import { Component, DestroyRef, Inject, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(@Inject(DestroyRef) public destroyRef: DestroyRef) {}
  // counter$ = new BehaviorSubject<number>(0);
  customInterval$ = new Observable((subscriber) => {
    var count = 0;
    setInterval(() => {
      count = 1;
      subscriber.next({
        message: 'this is a dummy message',
        count,
      });
    }, 1000);
  });
  counter = 0;

  ngOnInit(): void {
    // const counterSubscription = this.counter$.subscribe({
    //   next: (currentCount) => {
    //     this.counter = currentCount;
    //     console.log(`current Counter Value ${currentCount}`);
    //   },
    // });

    this.customInterval$.subscribe({
      next: (val: any) => {
        console.log(val.message);
        this.counter += val.count;
      },
    });

    // this.destroyRef.onDestroy(counterSubscription.unsubscribe);
    // this.destroyRef.onDestroy(this.customInterval$);
  }

  onClick() {
    // this.counter$.next(this.counter$.value + 1);
    this.counter += 10;
  }
}
