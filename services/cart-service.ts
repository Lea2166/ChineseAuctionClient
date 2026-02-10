import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import {ReadCartDTO, CartItemReadDTO} from '../models/PackageOrderCart'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {


  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/Cart';

  private _cart = signal<ReadCartDTO | null>(null);
  readonly cart = computed(() => this._cart());
  AddPrizeToCart(cartItem: CartItemReadDTO): Observable<void> {
    const currentCart = this._cart();
    return this.http.post<void>(`${this.apiUrl}/AddPrizeToCart`, cartItem);
  }
  RemovePrizeFromCart(prizeId: number): Observable<void> {
    const currentCart = this._cart();
    return this.http.delete<void>(`${this.apiUrl}/RemovePrizeFromCart/${prizeId}`);
  }
  GetCartByUserId(userId: number): void {
    this.http.get<ReadCartDTO>(`${this.apiUrl}/GetCartByUserId/${userId}`).subscribe(cart => {
      this.setCart(cart);
    });
  }

  setCart(cart: ReadCartDTO): void {
    this._cart.set(cart)
  }
 


}
