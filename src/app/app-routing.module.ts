import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Challenge1Component } from './challenge1/challenge1.component';
import { Challenge2Component } from './challenge2/challenge2.component';

const routes: Routes = [
  { path: 'challenge1', component: Challenge1Component },
  { path: 'challenge2', component: Challenge2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [Challenge1Component, Challenge2Component];
