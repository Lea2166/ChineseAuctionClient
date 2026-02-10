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
  AddPrizeToCart(cartItem: CartItemReadDTO, token?: string): Observable<void> {
        if(!token) {
      console.log("in CartService.AddPrizeToCart: token is undefined");
      throw new Error("in CartService.AddPrizeToCart: token is undefined")
    }
    const currentCart = this._cart();
    return this.http.post<void>(`${this.apiUrl}/AddPrizeToCart`, cartItem,{ headers: { Authorization: "Bearer " + token } });
  }
  RemovePrizeFromCart(prizeId: number, token?: string): Observable<void> {
    if(!token) {
      console.log("in CartService.RemovePrizeFromCart: token is undefined");
      throw new Error("in CartService.RemovePrizeFromCart: token is undefined")
    }
    const currentCart = this._cart();
    return this.http.delete<void>(`${this.apiUrl}/RemovePrizeFromCart/${prizeId}`,{ headers: { Authorization: "Bearer " + token } });
  }
  GetCartByUserId(token?: string): Observable<void> {
        if(!token) {
      console.log("in CartService.GetCartByUserId: token is undefined");
      throw new Error("in CartService.GetCartByUserId: token is undefined")
    }
    return this.http.get<void>(`${this.apiUrl}/GetCartByUserId`,{ headers: { Authorization: "Bearer " + token } });
  }
  setCart(cart: ReadCartDTO): void {
    this._cart.set(cart)
  }
}
