import { Component, inject } from '@angular/core';
import { OrderFiltersView } from "../order-filters-view/order-filters-view";
import { SalesService } from '../../../services/sales';
import { UserService } from '../../../services/user';
import { OrderQParams } from '../../../models/Filters';
import { PrizesService } from '../../../services/prizes';

@Component({
  selector: 'app-order-filters',
  imports: [OrderFiltersView],
  templateUrl: './order-filters.html',
  styleUrl: './order-filters.scss',
})
export class OrderFilters {

  salesService: SalesService = inject(SalesService);
  userService: UserService = inject(UserService);
  prizesService:PrizesService=inject(PrizesService)


  

  sendFilters(filters: OrderQParams) {
    this.salesService.getAllOrders(this.userService.token(), filters).subscribe({
      next: orders => {
        this.salesService.setAllOrders([...orders])
        console.log(this.salesService.orders());

      },
      error: (err: any) => {
        console.error('error fetch prizes with filters', err);
      }
    })
  }

}
