import { Component, inject } from '@angular/core';
import { PrizeFiltersView } from "../prize-filters-view/prize-filters-view";
import { CategoriesService } from '../../../services/categories';

@Component({
  selector: 'app-prize-filters',
  imports: [PrizeFiltersView],
  templateUrl: './prize-filters.html',
  styleUrl: './prize-filters.scss',
})
export class PrizeFilters {

  categoriesService:CategoriesService=inject(CategoriesService);

  ngOnInit() { 
    this.categoriesService.getAllCategories().subscribe({
      next: categories => {
        this.categoriesService.setCategories([...categories])
      },
      error: (err: any) => {
        console.error('error fetch categories', err);
      }
    });
  }
}
