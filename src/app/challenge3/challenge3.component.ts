import { Component } from '@angular/core';
import {
  of,
  tap,
  share,
  retry,
  timer,
  mapTo,
  repeat,
  Subject,
  switchMap,
  startWith,
  catchError,
  switchMapTo,
  ignoreElements,
} from 'rxjs';
import { COLLAPSE } from './animation';
import { LoginService } from './login.service';

@Component({
  selector: 'app-challenge3',
  templateUrl: './challenge3.component.html',
  styleUrls: ['./challenge3.component.less'],
  animations: [COLLAPSE],
})
export class Challenge3Component {
  constructor(private loginservice: LoginService) {}

  submit$ = new Subject<void>();

  request$ = this.submit$.pipe(
    tap((data) => (this.loginservice.username = String(data))),
    switchMapTo(this.loginservice.pipe(startWith(''))),
    share()
  );

  user$ = this.request$.pipe(retry());

  error$ = this.request$.pipe(
    ignoreElements(),
    catchError((e) => of(e)),
    repeat(),
    switchMap((e) => timer(5000).pipe(startWith(e)))
  );

  disabled$ = this.request$.pipe(
    mapTo(true),
    catchError(() => of(false)),
    repeat()
  );
}
