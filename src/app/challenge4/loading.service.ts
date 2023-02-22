import { Injectable } from '@angular/core';
import { take, map, endWith, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  load(): Observable<string | number> {
    return timer(0, 1000).pipe(
      take(6),
      map((progress) => (progress + 1) * 20),
      endWith('Congratulations, you made it!')
    );
  }
}
