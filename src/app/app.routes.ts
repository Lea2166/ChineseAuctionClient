import { Routes } from '@angular/router';
import { Prizes } from '../pages/prizes/prizes';
import { Donors } from '../pages/donors/donors';
import { OnePrize } from '../PrizeComponents/one-prize/one-prize';
import { AddPrize } from '../PrizeComponents/add-prize/add-prize';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'prizes', pathMatch: 'full', component: Prizes,
  },
  { path: 'prizes/:id', pathMatch: 'full', component: OnePrize },
  { path: 'donors', pathMatch: 'full', component: Donors },
  {path: 'prizes/add', pathMatch: 'full', component: AddPrize}
];