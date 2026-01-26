import { Component, inject } from '@angular/core';
import { PrizeFiltersView } from "../prize-filters-view/prize-filters-view";
import { CategoriesService } from '../../../services/categories';
import { UserService } from '../../../services/user';

@Component({
  selector: 'app-prize-filters',
  imports: [PrizeFiltersView],
  templateUrl: './prize-filters.html',
  styleUrl: './prize-filters.scss',
})
export class PrizeFilters {

  categoriesService:CategoriesService=inject(CategoriesService);
  userService:UserService=inject(UserService);

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
