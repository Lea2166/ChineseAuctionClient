import { Component, inject } from '@angular/core';
import { CartService } from '../../../services/cart-service';
import { Router } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { ChoosePackages } from '../../orderComponents/choose-packages/choose-packages';
import { PurchaseOrder } from '../../orderComponents/purchase-order/purchase-order';
import { NzResultModule } from "ng-zorro-antd/result";

@Component({
  selector: 'app-order',
  imports: [NzStepsModule, ChoosePackages, PurchaseOrder, NzResultModule],
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

    
    setTimeout(() => {
      const element = document.getElementById(`step${this.current}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  }

  prev(): void {
    if (this.current > 0) {
      this.current -= 1;
    }
  }
}
