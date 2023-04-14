import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Challenge1Component } from './challenge1/challenge1.component';
import { Challenge10Component } from './challenge10/challenge10.component';
import { Challenge2Component } from './challenge2/challenge2.component';
import { Challenge3Component } from './challenge3/challenge3.component';
import { Challenge4Component } from './challenge4/challenge4.component';
import { Challenge5Component } from './challenge5/challenge5.component';
import { Challenge6Component } from './challenge6/challenge6.component';
import { Challenge7Component } from './challenge7/challenge7.component';
import { Challenge8Component } from './challenge8/challenge8.component';
import { Challenge9Component } from './challenge9/challenge9.component';

const routes: Routes = [
  { path: '', redirectTo: '/challenge1', pathMatch: 'full' },
  { path: 'challenge1', component: Challenge1Component },
  { path: 'challenge2', component: Challenge2Component },
  { path: 'challenge3', component: Challenge3Component },
  { path: 'challenge4', component: Challenge4Component },
  { path: 'challenge5', component: Challenge5Component },
  { path: 'challenge6', component: Challenge6Component },
  { path: 'challenge7', component: Challenge7Component },
  { path: 'challenge8', component: Challenge8Component },
  { path: 'challenge9', component: Challenge9Component },
  { path: 'challenge10', component: Challenge10Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  Challenge1Component,
  Challenge2Component,
  Challenge3Component,
  Challenge4Component,
  Challenge5Component,
  Challenge6Component,
  Challenge7Component,
  Challenge8Component,
  Challenge9Component,
  Challenge10Component,
];
