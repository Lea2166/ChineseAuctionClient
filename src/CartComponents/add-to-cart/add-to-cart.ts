import { Component, inject } from '@angular/core';
import { MessagesService } from '../../../services/messages';
import { CartService } from '../../../services/cart-service';
import { CartItemReadDTO } from '../../../models/PackageOrderCart';
@Component({
  selector: 'app-add-to-cart',
  imports: [],
  templateUrl: './add-to-cart.html',
  styleUrl: './add-to-cart.scss',
})
export class AddToCart {
  public CartService = inject(CartService);
  public messageService = inject(MessagesService);
  addPrizeToCart(prizeId: number, quantity: number) {
    const cartItem: CartItemReadDTO = {
      prizeId: prizeId,
      quantity: quantity
    };
    this.CartService.AddPrizeToCart(cartItem);
    this.messageService.success('Prize added to cart successfully');
  }

}
