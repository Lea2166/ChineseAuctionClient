import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user';
import { MessagesService } from '../../../services/messages';
import { CartService } from '../../../services/cart-service';

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
    this.CartService.RemovePrizeFromCart(prizeId, this.UserService.token());
    this.messageService.success('Prize removed from cart successfully');
  }
}
