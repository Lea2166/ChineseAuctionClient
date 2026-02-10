import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { ReadCartDTO, CartItemReadDTO, Category } from '../models/PackageOrderCart'
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {


  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/Donor';

  private _cart = signal<ReadCartDTO | null>(null);
  readonly cart = computed(() => this._cart());
  
  AddPrizeToCart(cartItem: CartItemReadDTO): void {
    const currentCart = this._cart();
    if (currentCart) {
      const existingItemIndex = currentCart.cartItems.findIndex(item => item.prizeId === cartItem.prizeId);
      if (existingItemIndex !== -1) {
        currentCart.cartItems[existingItemIndex].quantity += cartItem.quantity;
      } else {
        currentCart.cartItems.push(cartItem);
      }
      this.setCart(currentCart);
    }
  }

  RemovePrizeFromCart(prizeId: number): void {
    const currentCart = this._cart();
    if (currentCart) {
      const updatedCartItems = currentCart.cartItems.filter(item => item.prizeId !== prizeId);
      this.setCart({ ...currentCart, cartItems: updatedCartItems });
    }
  }
  
  GetCartByUserId(token: string | null):  Observable<ReadCartDTO> {
    return this.http.get<ReadCartDTO>(`${this.apiUrl}/GetCartByUserId/`, { headers: { Authorization: `Bearer ${token}` } }).pipe(
        tap((cart: ReadCartDTO) => this._cart.set(cart))
    )
         
  }

  setCart(cart: ReadCartDTO): void {
    this._cart.set(cart)
  }



}
