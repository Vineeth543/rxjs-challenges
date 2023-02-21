import { InjectionToken } from '@angular/core';
import {
  Observable,
  fromEvent,
  startWith,
  map,
  distinctUntilChanged,
} from 'rxjs';

export const PAGE_VISIBILITY = new InjectionToken<Observable<boolean>>(
  'Shared Observable based on `document visibility changed`',
  {
    factory: () => {
      return fromEvent(document, 'visibilitychange').pipe(
        startWith(0),
        map(() => document.visibilityState !== 'hidden')
        // distinctUntilChanged()
      );
    },
  }
);
