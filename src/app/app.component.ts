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
  ];
}
