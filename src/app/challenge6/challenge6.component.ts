import { Component } from '@angular/core';
import { map, reduce, scan, share, startWith, Subject } from 'rxjs';

@Component({
  selector: 'app-challenge6',
  templateUrl: './challenge6.component.html',
  styleUrls: ['./challenge6.component.less'],
})
export class Challenge6Component {
  noMessage: string = 'Nothing';

  selectSeat$ = new Subject<number>();

  selectedMessage$ = this.selectSeat$.pipe(
    scan(this.registerSeats, new Set<number>()),
    startWith(new Set<number>()),
    map((set) => (set.size ? Array.from(set).join(', ') : this.noMessage)),
    share()
  );

  cost$ = this.selectSeat$.pipe(
    reduce(this.registerSeats, new Set()),
    map((selected) => selected.size * 100)
  );

  registerSeats(selected: Set<number>, seat: number): Set<number> {
    if (selected.has(seat)) {
      selected.delete(seat);
    } else {
      selected.add(seat);
    }
    return selected;
  }
}
