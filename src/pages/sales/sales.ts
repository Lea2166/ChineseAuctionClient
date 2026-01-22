import { Component } from '@angular/core';
import { SalesList } from '../../SalesComponents/sales-list/sales-list';

@Component({
  selector: 'app-sales',
  imports: [SalesList],
  templateUrl: './sales.html',
  styleUrl: './sales.scss',
})
export class Sales {

}
