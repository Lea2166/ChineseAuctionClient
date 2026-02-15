import { Component, inject } from '@angular/core';
import { SalesService } from '../../../services/sales';
import { UserService } from '../../../services/user';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-total-revenue-report',
  imports: [],
  templateUrl: './total-revenue-report.html',
  styleUrl: './total-revenue-report.scss',
})
export class TotalRevenueReport {
public saleService = inject(SalesService);
public userService = inject(UserService);
ngOnInit() {
  this.getTotalRevenueReport();
}
public getTotalRevenueReport(){
  this.saleService.getAllOrders(this.userService.token(), {  }).subscribe({ 
    next: (response) => {
      const totalRevenue = response.reduce((sum, order) => sum + order.totalPrice, 0);
      console.log('Total Revenue:', totalRevenue);
    },
    error: (error) => {
      console.error('Error fetching total revenue report:', error);
    }
  });
}
}
