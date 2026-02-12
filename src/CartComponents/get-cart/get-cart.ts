
import { Component, inject } from '@angular/core';
import { CartService } from '../../../services/cart-service';
import { MessagesService } from '../../../services/messages';
import { UserService } from '../../../services/user';
import { GetCartView } from '../get-cart-view/get-cart-view';
import { NzSpinComponent } from "ng-zorro-antd/spin";
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-cart',
  imports: [GetCartView, NzSpinComponent],
  templateUrl: './get-cart.html',
  styleUrl: './get-cart.scss',
})

export class GetCart {
  public cartService = inject(CartService);
  public messageService = inject(MessagesService);
  public userService = inject(UserService);

  loading: boolean = false;

  ngOnInit() {
    this.GetCartByUserId()
  }

  GetCartByUserId() {
    this.loading = true
    this.cartService.GetCartByUserId(this.userService.token()).subscribe({
      next: cart => {
        this.cartService.setCart(cart);
        console.log("cart loaded successfully", cart);

      },
      error: (err: any) => {
        console.error('Error fetching cart', err);
        this.messageService.error('Error fetching cart', err);
      },
      complete: () => this.complete()
    });
  }
  complete() {
    this.loading = false
  }


  router: Router = inject(Router)

  navigate() {
    if (this.cartService.cart()?.cartItems.length ?? 0 > 0) {
      this.cartService.allowCheckout();
      this.router.navigate(['/order'], );
    }
  }

}
