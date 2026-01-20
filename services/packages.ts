import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { CreatePackageDTO, ReadPackageDTO } from '../models/PackageOrderCart';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Packages {

  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/Package';
  private _packages = signal<ReadPackageDTO[] | []>([]);
  readonly packages = computed(() => this._packages());

  setAllPackages(packages: ReadPackageDTO[]): void {
    this._packages.set(packages)
  }

  getAllPackages(): Observable<ReadPackageDTO[]> {
    return this.http.get<ReadPackageDTO[]>(`${this.apiUrl}`).pipe(
      tap((packages: ReadPackageDTO[]) => this._packages.set(packages)))
  }


  updatePackage(pkg: CreatePackageDTO | null, id: number, token: string | null): Observable<number> {
    if (token === null || token === undefined) {
      console.log(" token is undefined");
      throw new Error("token is undefined")

    }
    return this.http.put<number>(`${this.apiUrl}/${id}`, pkg, { headers: { Authorization: "Bearer " + token } })
  }

  addPackage(pkg: CreatePackageDTO, token: string | undefined | null) {
    if (token === null || token === undefined) {
      console.log(" token is undefined");
      throw new Error("token is undefined")

    }
    return this.http.post<number>(`${this.apiUrl}`, pkg, { headers: { Authorization: "Bearer " + token } })
  }


  deletePackage(id: number, token: string | null): Observable<number> {
    if (token == null) {
      console.log("token is undefined");
      throw new Error(" token is undefined")
    }
    return this.http.delete<number>(`${this.apiUrl}/${id}`, { headers: { Authorization: "Bearer " + token } }).pipe(tap(() => {

      const currentPrizes = this._packages();
      const updatedPrizes = currentPrizes.filter(p => p.id !== id);
      this.setAllPackages(updatedPrizes);
    }))

  }
}
