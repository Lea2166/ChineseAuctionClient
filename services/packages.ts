import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { CreatePackageDTO, ReadPackageDTO } from '../models/PackageOrderCart';
import { Observable, tap } from 'rxjs';
import { ReadPrizeDTO } from '../models/Prize';

@Injectable({
  providedIn: 'root',
})
export class Packages {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/Package';
  private _packages = signal<ReadPackageDTO[]>([]);
  readonly packages = computed(() => this._packages());

  getAllPackages(): Observable<ReadPackageDTO[]> {
    return this.http.get<ReadPackageDTO[]>(this.apiUrl).pipe(
          tap((packages: ReadPackageDTO[]) => this._packages.set(packages)));
  }
  addPackage(pkg: CreatePackageDTO, token: string | null) {
    return this.http.post(this.apiUrl, pkg, { headers: { Authorization: "Bearer " + token } });
  }
  deletePackage(id: number, token: string | null) {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: { Authorization: "Bearer " + token } });
  }
  updatePackage(id: number, pkg: any, token: string | null) {
    return this.http.put(`${this.apiUrl}/${id}`, pkg, { headers: { Authorization: "Bearer " + token } });
  }
  setAllPackages(packages: ReadPackageDTO[]): void {
    this._packages.set(packages);
    }
  }