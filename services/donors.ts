import { HttpClient, HttpParams } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { DonorReadDTO, DonorCreateDTO, DonorUpdateDTO } from '../models/Donor'
import { Observable, tap } from 'rxjs';
import qs from 'qs';
import { DonorQParams } from '../models/Filters';

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

  getAlldonors(token: string | null | undefined, orderQParams: DonorQParams): Observable<DonorReadDTO[]> {
    if (token === null || token === undefined) {
      console.log("in DonorsService.getAlldonors: token is undefined");
      throw new Error("in DonorsService.getAlldonors: token is undefined")

    }

    const queryString = qs.stringify(orderQParams, { allowDots: true, skipNulls: true });
    const params = new HttpParams({ fromString: queryString });
    return this.http.get<DonorReadDTO[]>(`${this.apiUrl}`, { headers: { Authorization: "Bearer " + token }, params }).pipe(
      tap((donors: DonorReadDTO[]) => this._donors.set(donors)))
  }


  addDonor(donor: DonorCreateDTO, token: string | undefined | null) {
    if (token === null || token === undefined) {
      console.log("in DonorsService.addDonor: token is undefined");
      throw new Error("in DonorsService.addDonor: token is undefined")

    }
    return this.http.post<number>(`${this.apiUrl}`, donor, { headers: { Authorization: "Bearer " + token } })
  }

  updateDonor(id: number, donor: DonorUpdateDTO, token: string | null) {
    if (token === null || token === undefined) {
      console.log("in DonorsService.updateDonor: token is undefined");
      throw new Error("in DonorsService.updateDonor: token is undefined")

    }
    return this.http.put<number>(`${this.apiUrl}/${id}`, donor, { headers: { Authorization: "Bearer " + token } })
  }

  deleteDonor(id: number, token: string | null): Observable<number> {
    if (token == null) {
      console.log("in DonorsService.updateDonor: token is undefined");
      throw new Error("in DonorsService.updateDonor: token is undefined")
    }
    return this.http.delete<number>(`${this.apiUrl}/${id}`, { headers: { Authorization: "Bearer " + token } }).pipe(tap(() => {

      const currentDonors = this._donors();
      const updatedDonors = currentDonors.filter(p => p.id !== id);
      this.setDonors(updatedDonors);
    }))

  }

}
