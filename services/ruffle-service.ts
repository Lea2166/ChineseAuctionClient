import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReadWinnerDTO } from '../models/Winner';

@Injectable({
  providedIn: 'root',
})

export class RuffleService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/Raffle';


  Ruffle(id: number, token: string | null): Observable<ReadWinnerDTO> {
    if (token == null) {
      console.log("in DonorsService.updateDonor: token is undefined");
      throw new Error("in DonorsService.updateDonor: token is undefined")
    }
    return this.http.post<ReadWinnerDTO>(`${this.apiUrl}/${id}`,null, { headers: { Authorization: "Bearer " + token } });
  }
}
