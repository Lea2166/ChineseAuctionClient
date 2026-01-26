import { Component } from '@angular/core';
import { SalesList } from '../../SalesComponents/sales-list/sales-list';
import { OrderFilters } from "../../SalesComponents/order-filters/order-filters";

@Component({
  selector: 'app-sales',
  imports: [SalesList, OrderFilters],
  templateUrl: './sales.html',
  styleUrl: './sales.scss',
})
export class Sales {

}
