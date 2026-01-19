import { Routes } from '@angular/router';
import { Prizes } from '../pages/prizes/prizes';
import { Donors } from '../pages/donors/donors';
import { OnePrize } from '../PrizeComponents/one-prize/one-prize';
import { AddPrize } from '../PrizeComponents/add-prize/add-prize';
import { Packages } from '../pages/packages/packages';
import { HomePage } from '../pages/home-page/home-page';


export const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomePage },
  {
    path: 'prizes', pathMatch: 'full', component: Prizes,
  },
  { path: 'prizes/:id', pathMatch: 'full', component: OnePrize },
  { path: 'donors', pathMatch: 'full', component: Donors },
  { path: 'prizes/add', pathMatch: 'full', component: AddPrize },
  { path: 'packages', pathMatch: 'full', component: Packages }

];