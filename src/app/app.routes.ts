import { Routes } from '@angular/router';
import { Prizes } from '../pages/prizes/prizes';
import { Donors } from '../pages/donors/donors';
import { OnePrize } from '../PrizeComponents/one-prize/one-prize';
import { AddPrize } from '../PrizeComponents/add-prize/add-prize';
import { Packages } from '../pages/packages/packages';
import { HomePage } from '../pages/home-page/home-page';
import { Sales } from '../pages/sales/sales';
import { NotFound } from '../not-found/not-found';
import { Cart } from '../pages/cart/cart';
import { PurchaseOrder } from '../orderComponents/purchase-order/purchase-order';



export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', pathMatch: 'full', component: HomePage },
  { path: 'prizes', pathMatch: 'full', component: Prizes, },
  { path: 'prizes/:id', pathMatch: 'full', component: OnePrize },
  { path: 'donors', pathMatch: 'full', component: Donors },
  { path: 'prizes/add', pathMatch: 'full', component: AddPrize },
  { path: 'packages', pathMatch: 'full', component: Packages },
  { path: 'sales', pathMatch: 'full', component: Sales },
  { path: 'cart', pathMatch: 'full', component: Cart },
  { path: 'cart/order', pathMatch: 'full', component: PurchaseOrder },

  { path: '**', component: NotFound }

];