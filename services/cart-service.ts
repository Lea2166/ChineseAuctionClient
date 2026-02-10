import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { ReadCartDTO, CartItemReadDTO } from '../models/PackageOrderCart'
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {


  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/Cart';

  private _cart = signal<ReadCartDTO | null>(null);
  readonly cart = computed(() => this._cart());


  AddPrizeToCart(cartItem: CartItemReadDTO, token?: string): Observable<number> {
    if (!token) {
      console.log("in CartService.AddPrizeToCart: token is undefined");
      throw new Error("in CartService.AddPrizeToCart: token is undefined")
    }
    return this.http.post<number>(`${this.apiUrl}/AddPrizeToCart`, cartItem, { headers: { Authorization: "Bearer " + token } });
  }

  RemovePrizeFromCart(prizeId: number, token: string | null): Observable<number> {
    if (!token) {
      console.log("in CartService.RemovePrizeFromCart: token is undefined");
      throw new Error("in CartService.RemovePrizeFromCart: token is undefined")
    }
    return this.http.delete<number>(`${this.apiUrl}/RemovePrizeFromCart/${prizeId}`, { headers: { Authorization: "Bearer " + token } });
  }


  GetCartByUserId(token: string | null): Observable<ReadCartDTO> {
    if (token === null || token === undefined) {
      console.log("in CartService.GetCartByUserId: token is undefined");
      throw new Error("in CartService.GetCartByUserId: token is undefined")
    }
    return this.http.get<ReadCartDTO>(`${this.apiUrl}/GetCartByUserId/`, { headers: { authorization: `Bearer ${token}` } }).pipe(
      tap(cart => this.setCart(cart))
    );
  }
  setCart(cart: ReadCartDTO): void {
    this._cart.set(cart)
  }

}

