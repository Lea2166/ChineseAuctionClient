import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ReadPrizeDTO, CreatePrizeDTO, UpdatePrizeDTO } from '../models/Prize';

@Injectable({
  providedIn: 'root',
})
export class PrizesService {

  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/Prize';

  private _prizes = signal<ReadPrizeDTO[] | []>([]);
  readonly prizes = computed(() => this._prizes());

  private _simplePrize = signal<CreatePrizeDTO | null>(null);
  readonly simplePrize = computed(() => this._simplePrize());

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

  updatePrize(prize: UpdatePrizeDTO, token: string | null): Observable<number> {
    if (token === null || token === undefined) {
      console.log("in DonorsService.updateDonor: token is undefined");
      throw new Error("in DonorsService.updateDonor: token is undefined")

    }
    return this.http.put<number>(`${this.apiUrl}/${prize.id}`, prize, { headers: { Authorization: "Bearer " + token } })
  }

  getOnePrize(id: number): Observable<ReadPrizeDTO> {
    return this.http.get<ReadPrizeDTO>(`${this.apiUrl}/${id}`)
    // .pipe(
    //   tap((prize: ReadPrizeDTO) => this._prize.set(prize)))
  }

  addPrize(prize: CreatePrizeDTO, token: string | undefined | null) {
    if (token === null || token === undefined) {
      console.log("in PrizeService.addPrize: token is undefined");
      throw new Error("in PrizeService.addPrize: token is undefined")

    }
    return this.http.post<number>(`${this.apiUrl}`, prize, { headers: { Authorization: "Bearer " + token } })
  }

  setSimplePrize(prize: CreatePrizeDTO, token: string | null): Observable<CreatePrizeDTO> {
    if (token == null)
      return this.http.post<CreatePrizeDTO>(`${this.apiUrl}`, prize).pipe();
    return this.http.post<CreatePrizeDTO>(`${this.apiUrl}`, prize, { headers: { Authorization: "Bearer " + token } }).pipe();
  }

  deletePrize(id: number, token: string | null): Observable<number> {
    if (token == null) {
      console.log("in DonorsService.updateDonor: token is undefined");
      throw new Error("in DonorsService.updateDonor: token is undefined")
    }
    return this.http.delete<number>(`${this.apiUrl}/${id}`, { headers: { Authorization: "Bearer " + token } }).pipe(tap(() => {

      const currentPrizes = this._prizes();
      const updatedPrizes = currentPrizes.filter(p => p.id !== id);
      this.setAllPrizes(updatedPrizes);
    }))

  }


}