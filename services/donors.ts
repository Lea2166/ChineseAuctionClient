import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { DonorReadDTO, DonorCreateDTO } from '../models/Donor'
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DonorsService {

  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/Donor';

  private _donors = signal<DonorReadDTO[] | []>([]);
  readonly donors = computed(() => this._donors());

  private _donor = signal<DonorReadDTO | null>(null);
  readonly donor = computed(() => this._donor());

  setDonors(donors: DonorReadDTO[]): void {
    this._donors.set(donors)
  }
  setdonor(donor: DonorReadDTO) {
    this._donor.set(donor)
  }

  getAlldonors(token: string | null | undefined): Observable<DonorReadDTO[]> {
    if (token === null || token === undefined) {
      console.log("in DonorsService.getAlldonors: token is undefined");
      throw new Error("in DonorsService.getAlldonors: token is undefined")

    }
    return this.http.get<DonorReadDTO[]>(`${this.apiUrl}`, { headers: { Authorization: "Bearer " + token } }).pipe(
      tap((donors: DonorReadDTO[]) => this._donors.set(donors)))
  }

  // getOnedonor(id: number, token: string): Observable<DonorReadDTO> {
  //   return this.http.get<DonorReadDTO>(`${this.apiUrl}/${id}`, { headers: { Authorization: "Bearer " + token } }).pipe(
  //     tap((donor: DonorReadDTO) => this._donor.set(donor)))
  // }

  addDonor(donor: DonorCreateDTO, token: string) {
     if (token === null || token === undefined) {
      console.log("in DonorsService.addDonor: token is undefined");
      throw new Error("in DonorsService.addDonor: token is undefined")

    }
    return this.http.post<number>(`${this.apiUrl}`, { donor }, { headers: { Authorization: "Bearer " + token } })
  }

  updateDonor(id: number, donor: DonorCreateDTO, token: string) {
     if (token === null || token === undefined) {
      console.log("in DonorsService.updateDonor: token is undefined");
      throw new Error("in DonorsService.updateDonor: token is undefined")

    }
    return this.http.post<number>(`${this.apiUrl}/${id}`, { donor }, { headers: { Authorization: "Bearer " + token } })
  }

}
