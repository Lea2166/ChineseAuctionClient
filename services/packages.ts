import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Packages {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/Package';

  getPackage() {
    return this.http.get(this.apiUrl);
  }
  addPackage(pkg: any,token: string|null) {
    return this.http.post(this.apiUrl, pkg,{ headers: { Authorization: "Bearer " + token } });
  }
  deletePackage(id: number,token: string|null) {
    return this.http.delete(`${this.apiUrl}/${id}`,{ headers: { Authorization: "Bearer " + token } });
  }
  updatePackage(id: number, pkg: any,token: string|null) {
    return this.http.put(`${this.apiUrl}/${id}`, pkg,{ headers: { Authorization: "Bearer " + token } });
  }
}
