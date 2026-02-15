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
totalRevenue: number = 0;
ngOnInit() {
  this.getTotalRevenueReport();
}
public getTotalRevenueReport(){
  this.saleService.getAllOrders(this.userService.token(), {  }).subscribe({ 
    next: (response) => {
       this.totalRevenue = response
      console.log('Total Revenue:', this.totalRevenue);
    },
    error: (error) => {
      console.error('Error fetching total revenue report:', error);
    }
  });
}
}
