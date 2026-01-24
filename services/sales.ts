import { HttpClient, HttpParams } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { ReadOrderDTO, ReadSimpleOrderDTO } from '../models/PackageOrderCart'
import { Observable, tap } from 'rxjs';
import { OrderQParams } from '../models/Filters'
import qs from 'qs';

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



  getAllOrders(token: string | null, orderQParams: OrderQParams): Observable<ReadSimpleOrderDTO[]> {
    const queryString = qs.stringify(orderQParams, { allowDots: true, skipNulls: true });
    const params = new HttpParams({ fromString: queryString });
    return this.http.get<ReadSimpleOrderDTO[]>(`${this.apiUrl}`, { headers: { Authorization: "Bearer " + token }, params }).pipe(
      tap((orders: ReadSimpleOrderDTO[]) => this._orders.set(orders)))
  }


  getOrder(token: string | null, id: number): Observable<ReadOrderDTO> {
    return this.http.get<ReadOrderDTO>(`${this.apiUrl}/${id}`, { headers: { Authorization: "Bearer " + token } }).pipe(
      tap((order: ReadOrderDTO) => this._order.set(order)))
  }






}
