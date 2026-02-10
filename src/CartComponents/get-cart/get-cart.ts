
import { Component, inject } from '@angular/core';
import { CartService } from '../../../services/cart-service';
import { MessagesService } from '../../../services/messages';
import { UserService } from '../../../services/user';
import { GetCartView } from '../get-cart-view/get-cart-view';


@Component({
  selector: 'app-get-cart',
  imports: [GetCartView],
  templateUrl: './get-cart.html',
  styleUrl: './get-cart.scss',
})

export class GetCart {
  public cartService = inject(CartService);
  public messageService = inject(MessagesService);
  public userService = inject(UserService);


  ngOnInit() {
    

    this.GetCartByUserId()

  }

  GetCartByUserId() {
    this.cartService.GetCartByUserId(this.userService.token()).subscribe({
      next: cart => {

        this.cartService.setCart(cart);
        console.log("cart loaded successfully", cart);

      },
      error: (err: any) => {
        console.error('Error fetching cart', err);
        this.messageService.error('Error fetching cart', err);
      }
    });
  }

}
