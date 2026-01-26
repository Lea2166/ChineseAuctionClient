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

  addCategory(name: string, token: string | null): Observable<Category> {
    if (token == null) {
      console.log("in CategoriesService.addCategory: token is undefined");
      throw new Error("in CategoriesService.addCategory: token is undefined")
    }
    const category = { name };
    return this.http.post<Category>(`${this.apiUrl}`, category, { headers: { Authorization: "Bearer " + token } }).pipe();
  }

  deleteCategory(id: number, token: string | null): Observable<void> {
    if (token == null) {
      console.log("in CategoriesService.deleteCategory: token is undefined");
      throw new Error("in CategoriesService.deleteCategory: token is undefined")
    }
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: { Authorization: "Bearer " + token } }).pipe(tap(() => {

      const currentCategories = this._categories();
      const updatedCategories = currentCategories.filter(c => c.id !== id);
      this.setCategories(updatedCategories);
    }));
  }

  updateCategory(category: Category, token: string | null): Observable<Category> {
    if (token == null) {
      console.log("in CategoriesService.updateCategory: token is undefined");
      throw new Error("in CategoriesService.updateCategory: token is undefined")
    }
    return this.http.put<Category>(`${this.apiUrl}`, category, { headers: { Authorization: "Bearer " + token } }).pipe(
      tap(() => {
        const currentCategories = this._categories();
        this.setCategories([...currentCategories, category]);
      }));


  }

  setCategories(categories: Category[]): void {
    this._categories.set(categories)
  }

}
