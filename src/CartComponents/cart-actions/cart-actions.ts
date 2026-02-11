import { Component, inject, Input } from '@angular/core';
import { MessagesService } from '../../../services/messages';
import { CartService } from '../../../services/cart-service';
import { CreateCartItemDTO } from '../../../models/PackageOrderCart';
import { UserService } from '../../../services/user';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cart-actions',
  imports: [NzIconModule,NzButtonModule, NzInputNumberModule,FormsModule],
  templateUrl: './cart-actions.html',
  styleUrl: './cart-actions.scss',
})
export class CartActions {
  CartService = inject(CartService);
  messageService = inject(MessagesService);
  userService = inject(UserService);

  @Input() prizeId: number | null = null;
  @Input() viewType: "cart" | "prize-card" | "one-prize" = "prize-card";

  @Input() qty: number = 1

  addPrizeToCart(prizeId: number | null, quantity: number) {
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


  deletePrizeFromCart(prizeId: number | null) {

    if (!prizeId) {
      this.messageService.error('Invalid prize ID', 'Cannot add to cart');
      return;
    }
    const token = this.userService.token();

    if (!token) {
      this.messageService.error('User not authenticated', 'Please log in to remove items from the cart');
      return;
    }

    this.CartService.RemovePrizeFromCart(prizeId, token).subscribe({
      next: () => {
        this.messageService.success('Prize removed from cart successfully');
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
        console.error('Error removing prize to cart', err);
        this.messageService.error('Error adding prize to cart', err);
      }
    }
    );

  }

}
