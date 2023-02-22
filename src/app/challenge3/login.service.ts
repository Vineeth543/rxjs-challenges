import { Injectable } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends Observable<string> {
  username: string = '';
  constructor() {
    super((subscriber) =>
      of(Math.random())
        .pipe(
          tap(() => console.log('Login Requested.')),
          delay(1000),
          map((response) => {
            if (response < 0.5) {
              throw new Error('Login failed!');
            }
            return this.username;
          })
        )
        .subscribe(subscriber)
    );
  }
}
