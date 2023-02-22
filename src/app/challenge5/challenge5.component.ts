import { Component } from '@angular/core';
import { map, timer, Subject, startWith, switchMap, takeWhile } from 'rxjs';

@Component({
  selector: 'app-challenge5',
  templateUrl: './challenge5.component.html',
  styleUrls: ['./challenge5.component.less'],
})
export class Challenge5Component {
  resend$ = new Subject<void>();

  countdown$ = this.resend$.pipe(
    startWith(0),
    switchMap(() =>
      timer(0, 1000).pipe(
        map((timer) => 5 - timer),
        takeWhile((timer) => timer >= 0)
      )
    )
  );
}
