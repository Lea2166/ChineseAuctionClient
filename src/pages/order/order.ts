import { Component, inject } from '@angular/core';
import { CartService } from '../../../services/cart-service';
import { Router } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { ChoosePackages } from '../../orderComponents/choose-packages/choose-packages';
import { PurchaseOrder } from '../../orderComponents/purchase-order/purchase-order';

@Component({
  selector: 'app-order',
  imports: [NzStepsModule,ChoosePackages,PurchaseOrder],
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order {

  cartService = inject(CartService);
  router = inject(Router);

  canOrder(): boolean {
    if (this.cartService.isCheckoutAllowed()) {
      return true;
    } else {
      this.router.navigate(['/cart']);
      return false;
    }
  }


  current = 0; 

  next(): void {
    this.current += 1;
  }

  prev(): void {
    this.current -= 1;
  }
}
