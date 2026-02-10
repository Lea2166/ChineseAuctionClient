import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import {ReadCartDTO, CartItemReadDTO} from '../models/PackageOrderCart'

@Injectable({
  providedIn: 'root',
})
export class CartService {


  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/Donor';

  private _cart = signal<ReadCartDTO | null>(null);
  readonly cart = computed(() => this._cart());



  setCart(cart: ReadCartDTO): void {
    this._cart.set(cart)
  }
 


}
