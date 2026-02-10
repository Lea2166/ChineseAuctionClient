import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user';
import { MessagesService } from '../../../services/messages';
import { CartService } from '../../../services/cart-service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-delete-from-cart',
  imports: [],
  templateUrl: './delete-from-cart.html',
  styleUrl: './delete-from-cart.scss',
})
export class DeleteFromCart {
  public CartService = inject(CartService);
  public messageService = inject(MessagesService);
  public UserService = inject(UserService);

  deletePrizeFromCart(prizeId: number) {
    const token = this.UserService.token();
    if (!token) {
      this.messageService.error('User not authenticated','Please log in to remove items from the cart');
      return;
    }
    this.CartService.RemovePrizeFromCart(prizeId,token);
    this.messageService.success('Prize removed from cart successfully');
  }
}
