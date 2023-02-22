import { Component } from '@angular/core';
import {
  map,
  share,
  filter,
  Subject,
  switchMap,
  distinctUntilChanged,
  timer,
} from 'rxjs';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-challenge4',
  templateUrl: './challenge4.component.html',
  styleUrls: ['./challenge4.component.less'],
})
export class Challenge4Component {
  constructor(private loadingService: LoadingService) {}

  load$ = new Subject<void>();

  response$ = this.load$.pipe(
    switchMap(() => this.loadingService.load()),
    share()
  );

  loaderDot$ = timer(0, 200).pipe(map((i) => '.'.repeat(i % 4)));

  result$ = this.response$.pipe(
    map((response) => (typeof response === 'string' ? response : null)),
    distinctUntilChanged()
  );

  loadingProgress$ = this.response$.pipe(
    filter((data) => typeof data === 'number')
  );
}
