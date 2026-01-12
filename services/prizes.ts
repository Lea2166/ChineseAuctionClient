import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { PrizeForWinnerDTO, ReadSimplePrizeDTO, ReadPrizeDTO, CreatePrizeDTO, CategoryDTOWithId } from '../models/Prize';

@Injectable({
  providedIn: 'root',
})
export class PrizesService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/Prize';

  private _prizes = signal<ReadPrizeDTO[] | []>([]);
  readonly prizes = computed(() => this._prizes());

  getAllPrizes(): Observable<ReadPrizeDTO[]> {
    return this.http.get<ReadPrizeDTO[]>(`${this.apiUrl}`).pipe(
      tap((prizes: ReadPrizeDTO[]) => this._prizes.set(prizes)))
  }
  setAllPrizes(prizes:ReadPrizeDTO[]):void{
    this._prizes.set(prizes)
  }
}