import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { ReadWinnerDTO } from '../models/Winner';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WinnersService {


  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api';

  private _winners = signal<ReadWinnerDTO[] | []>([]);
  readonly winners = computed(() => this._winners());

  setWinners(winners: ReadWinnerDTO[]) {
    this._winners.set(winners)
  }

  getAllWinners(token: string | null): Observable<ReadWinnerDTO[]> {

    if (token === null || token === undefined) {
      console.log("in PrizeService.addPrize: token is undefined");
      throw new Error("in PrizeService.addPrize: token is undefined")

    }
    return this.http.get<ReadWinnerDTO[]>(`${this.apiUrl}/GetAllWinners`, { headers: { Authorization: "Bearer " + token } }).pipe(
      tap((winners: ReadWinnerDTO[]) => this.setWinners(winners)))
  }




}
