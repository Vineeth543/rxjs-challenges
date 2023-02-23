import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  Challenges = [
    {
      name: 'Challenge 1',
      path: 'challenge1',
    },
    {
      name: 'Challenge 2',
      path: 'challenge2',
    },
    {
      name: 'Challenge 3',
      path: 'challenge3',
    },
    {
      name: 'Challenge 4',
      path: 'challenge4',
    },
    {
      name: 'Challenge 5',
      path: 'challenge5',
    },
    {
      name: 'Challenge 6',
      path: 'challenge6',
    },
  ];
}
