import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Category } from '../models/PackageOrderCart';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/Category';
  private _categories = signal<Category[] | []>([]);
  readonly categories = computed(() => this._categories());
    getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}`).pipe(
      tap((categories: Category[]) => this._categories.set(categories)))
  }

}
