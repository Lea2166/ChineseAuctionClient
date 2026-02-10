import { Component, inject } from '@angular/core';
import { GetCart } from '../../CartComponents/get-cart/get-cart';
import { NotFound } from "../../not-found/not-found";
import { UserService } from '../../../services/user';

@Component({
  selector: 'app-cart',
  imports: [GetCart, NotFound],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  userService = inject(UserService);

  isAdmin(): boolean {
    const user = this.userService.user();
    return user ? user.role === 'Admin' : false;
  }
  isConnected(): boolean {
    if (this.userService.user() === null) {
      return false
    }
    return true

  }
}
