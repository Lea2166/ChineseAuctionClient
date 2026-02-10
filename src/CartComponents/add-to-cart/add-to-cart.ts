import { Component, inject, Input } from '@angular/core';
import { MessagesService } from '../../../services/messages';
import { CartService } from '../../../services/cart-service';
import { CreateCartItemDTO } from '../../../models/PackageOrderCart';
import { UserService } from '../../../services/user';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-add-to-cart',
  imports: [NzIconModule],
  templateUrl: './add-to-cart.html',
  styleUrl: './add-to-cart.scss',
})

export class AddToCart {
  CartService = inject(CartService);
  messageService = inject(MessagesService);
  userService = inject(UserService);

  @Input() prizeId: number | null = null;
  @Input() viewType: "cart" | "prize-card" | "one-prize" = "prize-card";

  addPrizeToCart(prizeId: number|null, quantity: number) {
    if (!prizeId) {
      this.messageService.error('Invalid prize ID', 'Cannot add to cart');
      return;
    }
    const cartItem: CreateCartItemDTO = {
      prizeId: prizeId,
      quantity: quantity
    };
    this.CartService.AddPrizeToCart(cartItem, this.userService.token()).subscribe({
      next: () => {
        this.messageService.success('Prize added to cart successfully');
        this.CartService.GetCartByUserId(this.userService.token()).subscribe({
          next: cart => {
            this.CartService.setCart(cart);
          },
          error: (err: any) => {
            console.error('Error fetching cart after adding prize', err);
            this.messageService.error('Error fetching cart after adding prize', err);
          }

        });
      },
      error: (err: any) => {
        console.error('Error adding prize to cart', err);
        this.messageService.error('Error adding prize to cart', err);
      }
    })
  }
  addOnePrizeToCart(prizeId: number) {
    this.addPrizeToCart(prizeId, 1);
  }



}
