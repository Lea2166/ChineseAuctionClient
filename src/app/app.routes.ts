import { Routes } from '@angular/router';
import { Prizes } from '../pages/prizes/prizes';
import { Donors } from '../pages/donors/donors';
import { OnePrize } from '../prizeComponents/one-prize/one-prize';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'prizes', pathMatch: 'full', component: Prizes,

    // children: [
    //   { path: ':id', component: OnePrize }
    // ]
  },
  { path: 'prizes/:id', pathMatch: 'full', component: OnePrize },
  { path: 'donors', pathMatch: 'full', component: Donors }
];
