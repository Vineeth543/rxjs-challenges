import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PAGE_VISIBILITY } from './visibility.inject.token';

@Component({
  selector: 'app-challenge2',
  templateUrl: './challenge2.component.html',
  styleUrls: ['./challenge2.component.less'],
})
export class Challenge2Component implements OnInit {
  visibilityArray: boolean[] = [];

  constructor(
    @Inject(PAGE_VISIBILITY)
    readonly pageVisibility$: Observable<boolean>
  ) {}

  ngOnInit(): void {
    this.pageVisibility$.subscribe((data) => this.visibilityArray.push(data));
  }
}
