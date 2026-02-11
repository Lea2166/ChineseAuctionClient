import { Component, Input } from '@angular/core';
import { ReadCartDTO } from '../../../models/PackageOrderCart';
import { NzCardModule } from "ng-zorro-antd/card";
import { NzListModule } from "ng-zorro-antd/list";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddToCart } from "../add-to-cart/add-to-cart";
import { CartActions } from "../cart-actions/cart-actions";

@Component({
  selector: 'app-get-cart-view',
  imports: [NzCardModule, NzListModule, NzButtonModule, NzTagModule, FormsModule, NzInputNumberModule, AddToCart, CartActions],
  templateUrl: './get-cart-view.html',
  styleUrl: './get-cart-view.scss',
})

export class GetCartView {
  @Input() cart: ReadCartDTO | null = null;

  get totalItems(): number {
    return this.cart?.cartItems.reduce((sum, i) => sum + i.quantity, 0) || 0;
  }

  get totalPrice(): number {
    // return this.cart?.cartItems.reduce(
    //   (sum, i) => sum + (i.quantity * (i.prize.price || 0)),
    //   0
    // ) || 0;
    return 0;
  }


}
