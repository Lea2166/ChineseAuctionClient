import { Component, inject } from '@angular/core';
import { CategoriesService } from '../../../services/categories';

@Component({
  selector: 'app-get-categories',
  imports: [],
  templateUrl: './get-categories.html',
  styleUrl: './get-categories.scss',
})
export class GetCategories {
  public CategoriesService = inject(CategoriesService);

  ngOnInit() {
    this.CategoriesService.getAllCategories().subscribe({
      next: categories => {
        this.CategoriesService.setCategories([...categories])
      },
      error: (err: any) => {
        console.error('error fetch categories', err);
      }
    });
  }
}