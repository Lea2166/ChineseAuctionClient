import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RuffleService {
    private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/Ruffle';
  Ruffle(id: number,token:string|null) {
    return this.http.post(`${this.apiUrl}/${id}`, null,{ headers: { Authorization: "Bearer " + token } });
  }
}
