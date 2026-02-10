
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
      this.CartService.GetCartByUserId(token).subscribe({
        next: (cart) => {
          console.log('Cart loaded successfully', cart);
        },
        error: (err: any) => {
          console.error('Failed to load cart', err);
          this.messageService.error('Error', 'Failed to load cart data. Please try again later.');
        }
      });
    } else {
      this.messageService.error('User not logged in', 'Please log in to view your cart.');
    }
  }

}
