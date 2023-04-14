import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subject, shareReplay, switchMap } from 'rxjs';

@Component({
  selector: 'app-challenge10',
  templateUrl: './challenge10.component.html',
  styleUrls: ['./challenge10.component.less'],
})
export class Challenge10Component {
  target$$ = new Subject<HTMLElement>();
  target$ = this.target$$.pipe(shareReplay(1));

  @ViewChild('colorPicker')
  set colorPicker(ref: ElementRef<HTMLDivElement> | undefined) {
    if (ref) {
      this.target$$.next(ref.nativeElement);
    }
  }

  // mouseDown$ = this.target$.pipe(
  //   switchMap(target => )
  // )
}
