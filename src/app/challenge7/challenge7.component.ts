import { Component } from '@angular/core';
import {
  map,
  pairwise,
  fromEvent,
  throttleTime,
  distinctUntilChanged,
} from 'rxjs';

const THRESHOLD = 500;

@Component({
  selector: 'app-challenge7',
  templateUrl: './challenge7.component.html',
  styleUrls: ['./challenge7.component.less'],
})
export class Challenge7Component {
  hidden$ = fromEvent(document, 'scroll').pipe(
    throttleTime(50),
    map(() => document.documentElement.scrollTop),
    pairwise(),
    map(([prev, next]) => next > THRESHOLD || prev < next),
    distinctUntilChanged()
  );
}
