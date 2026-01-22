import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { ReadOrderDTO } from '../models/PackageOrderCart'
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/Order';

  private _orders = signal<ReadOrderDTO[] | []>([]);
  readonly orders = computed(() => this._orders());

  setAllOrders(orders: ReadOrderDTO[]): void {
    this._orders.set(orders)
  }

  getAllOrders(token: string | null): Observable<ReadOrderDTO[]> {
    return this.http.get<ReadOrderDTO[]>(`${this.apiUrl}`, { headers: { Authorization: "Bearer " + token } }).pipe(
      tap((orders: ReadOrderDTO[]) => this._orders.set(orders)))
  }


}
