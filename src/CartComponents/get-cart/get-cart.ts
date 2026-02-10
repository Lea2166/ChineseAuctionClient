
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
    const userId = this.UserService.user()?.id;
    if (userId) {
      this.CartService.GetCartByUserId(userId);
    }
  }
GetCartByUserId() {
  const userId = this.UserService.user()?.id;
  if (userId) {
    this.CartService.GetCartByUserId(userId);
  }
  else { 
    this.messageService.error('User not logged in', 'Please log in to view your cart.');
  }
}

}
