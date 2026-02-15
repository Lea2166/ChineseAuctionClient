import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/winner';
  getReportForWinners(token: string | null) {
    return this.http.get(this.apiUrl+'/GetAllWinners', { headers: { Authorization: `Bearer ${token}` } });
  }

}
