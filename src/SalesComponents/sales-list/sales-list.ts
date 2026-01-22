import { Component, inject } from '@angular/core';
import { SalesService } from '../../../services/sales'
import { UserService } from '../../../services/user';
import { SalesListView } from '../sales-list-view/sales-list-view';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-sales-list',
  imports: [SalesListView,NzSpinModule],
  templateUrl: './sales-list.html',
  styleUrl: './sales-list.scss',
})
export class SalesList {
  public salesService: SalesService = inject(SalesService);
  public userService: UserService = inject(UserService)

  ngOnInit() {
    this.salesService.getAllOrders(this.userService.token()).subscribe({
      next: orders => {
        this.salesService.setAllOrders([...orders])
        console.log(this.salesService.orders());
        

      },
      error: (err: any) => {
        console.error('error fetch prizes', err);
      }
    })
  }
}
