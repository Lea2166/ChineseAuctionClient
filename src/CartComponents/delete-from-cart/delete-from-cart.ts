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
  public userService = inject(UserService);

  deletePrizeFromCart(prizeId: number) {
    
    const token = this.userService.token();

    if (!token) {
      this.messageService.error('User not authenticated', 'Please log in to remove items from the cart');
      return;
    }

    this.CartService.RemovePrizeFromCart(prizeId, token).subscribe({
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
    }
    );
    this.messageService.success('Prize removed from cart successfully');
  }
}
