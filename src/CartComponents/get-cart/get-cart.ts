
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
  public CartService = inject(CartService);
  public messageService = inject(MessagesService);
  public UserService = inject(UserService);

  
  ngOnInit() {
    const token = this.UserService.token();
    if (token) {
      this.CartService.GetCartByUserId(token);
    }
  }
  GetCartByUserId() {
    this.CartService.GetCartByUserId(this.UserService.token()).subscribe({
      next: cart => {
        this.CartService.setCart(cart);
      },
      error: (err: any) => {
        console.error('Error fetching cart', err);
        this.messageService.error('Error fetching cart', err);
      }
    });
  }

}
