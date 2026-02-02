import { Component, inject } from '@angular/core';
import { SalesList } from '../../SalesComponents/sales-list/sales-list';
import { OrderFilters } from "../../SalesComponents/order-filters/order-filters";
import { UserService } from '../../../services/user';
import { NotFound } from "../../not-found/not-found";

@Component({
  selector: 'app-sales',
  imports: [SalesList, OrderFilters, NotFound],
  templateUrl: './sales.html',
  styleUrl: './sales.scss',
})
export class Sales {
 userService = inject(UserService);
  isAdmin(): boolean {
    const user = this.userService.user();
    return user?.role === 'Admin';
  }
}
