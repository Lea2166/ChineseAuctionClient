import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { ReadOrderDTO, ReadSimpleOrderDTO } from '../models/PackageOrderCart'
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/Order';

  private _orders = signal<ReadSimpleOrderDTO[] | []>([]);
  readonly orders = computed(() => this._orders());

  setAllOrders(orders: ReadSimpleOrderDTO[]): void {
    this._orders.set(orders)
  }


  private _order = signal<ReadOrderDTO | null>(null);
  readonly order = computed(() => this._order());

  setOrder(order: ReadOrderDTO): void {
    this._order.set(order)
  }



  getAllOrders(token: string | null): Observable<ReadSimpleOrderDTO[]> {
    return this.http.get<ReadSimpleOrderDTO[]>(`${this.apiUrl}`, { headers: { Authorization: "Bearer " + token } }).pipe(
      tap((orders: ReadSimpleOrderDTO[]) => this._orders.set(orders)))
  }


  getOrder(token: string | null, id: number): Observable<ReadOrderDTO> {
    return this.http.get<ReadOrderDTO>(`${this.apiUrl}/${id}`, { headers: { Authorization: "Bearer " + token } }).pipe(
      tap((order: ReadOrderDTO) => this._order.set(order)))
  }






}
