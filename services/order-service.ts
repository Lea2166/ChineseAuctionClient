import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Observable, of, delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {  
    private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/order';
  public _packages = signal<number[] | []>([]);
  setPackages(packages: number[]): void {
    this._packages.set(packages)
  }

  processPayment(paymentData: any): Observable<{success: boolean, message: string}> {
    return of({ success: true }).pipe(
      delay(3000),
      map(() => {
        const isSuccess = Math.random() > 0.15;
        return isSuccess 
          ? { success: true, message: 'The payment was processed successfully.' }
          : { success: false, message: 'The card was declined by the bank.' };
      })
    );
  }
  checkout(token:string|null):Observable<number> {
    if (token === null) {
      console.log("in OrderService.checkout: token is undefined");
      throw new Error("in OrderService.checkout: token is undefined")
    }
    else {
    return http.post<number[]>('https://localhost:7156/api/Order', this._packages(), { headers: {
      'Authorization': `Bearer ${token}`}})
    } 
  }
}
