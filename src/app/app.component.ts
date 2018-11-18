import { Component, EventEmitter } from '@angular/core';
import { Subject, Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables-workshop';

  myEmitter: EventEmitter<void>;
  mySubject: Subject<void>;

  constructor() {
    // Observable.create((observer) => {
    //   observer.next('foo');
    //   observer.complete();
    //   observer.error();
    // })

    // this.myEmitter.subscribe()

    // var observer = {
    //   next: x => console.log('Observer got a next value: ' + x),
    //   error: err => console.error('Observer got an error: ' + err),
    //   complete: () => console.log('Observer got a complete notification'),
    // };
    // or just use the functions (like then(then, error))

    // const subscription = observable.subscribe(observer)

    // each observer owns an independent instance of the observable
    // subject = multicast observable
    // subject.subscribe is like addEventListener
    // subjects are observables AND observers

    // BehaviourSubject - emit last value to new subscribers
    // ReplaySubject - record and re-emit values
    // AsyncSubject - just emit last value after observable completes

    // fromEvent(element, 'click')
  }

}
