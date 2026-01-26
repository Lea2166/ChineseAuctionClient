import { Component, inject, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Category } from '../../../models/PackageOrderCart';
import { CategoriesService } from '../../../services/categories';
import { UserService } from '../../../services/user';

@Component({
  selector: 'app-update-category',
  imports: [NzIconModule, NzButtonModule],
  templateUrl: './update-category.html',
  styleUrl: './update-category.scss',
})
export class UpdateCategory {

  @Input() category!: Category
  categoryService:CategoriesService=inject(CategoriesService);
  userService=inject(UserService);

  updateCategory(){
    this.categoryService.updateCategory(this.category,this.userService.token() || null).subscribe({

      error:(err)=>{
        console.error('Error updating category:', err);
      }
    })
  }
}
