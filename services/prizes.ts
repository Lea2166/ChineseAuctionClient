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

  private _prize = signal<ReadPrizeDTO | null>(null);
  readonly prize = computed(() => this._prize());

  setAllPrizes(prizes: ReadPrizeDTO[]): void {
    this._prizes.set(prizes)
  }
  setPrize(prize: ReadPrizeDTO) {
    this._prize.set(prize)
  }

  getAllPrizes(): Observable<ReadPrizeDTO[]> {
    return this.http.get<ReadPrizeDTO[]>(`${this.apiUrl}`).pipe(
      tap((prizes: ReadPrizeDTO[]) => this._prizes.set(prizes)))
  }

  getOnePrize(id: number): Observable<ReadPrizeDTO> {
    return this.http.get<ReadPrizeDTO>(`${this.apiUrl}/${id}`).pipe(
      tap((prize: ReadPrizeDTO) => this._prize.set(prize)))
  }
  setSimplePrize(prize: CreatePrizeDTO): Observable<CreatePrizeDTO> {
    return this.http.post<CreatePrizeDTO>(`${this.apiUrl}`, prize).pipe();
  }
}