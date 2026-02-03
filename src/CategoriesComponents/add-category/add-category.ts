import { Component, inject } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { UserService } from '../../../services/user';
import { NzButtonComponent } from "ng-zorro-antd/button";
import { CategoriesService } from '../../../services/categories';
import { MessagesService } from '../../../services/messages';

@Component({
  selector: 'app-add-category',
  imports: [NzIconModule, NzInputModule, NzButtonComponent,NzButtonComponent],
  templateUrl: './add-category.html',
  styleUrl: './add-category.scss',
})
export class AddCategory {

  userService:UserService=inject(UserService);
  messageService=inject(MessagesService);
  categoriesService:CategoriesService=inject(CategoriesService);

  addItem(input: HTMLInputElement): void {
    const value = input.value;
    this.categoriesService.addCategory(value,this.userService.user()?.token || null).subscribe({
      next: () => {
         this.categoriesService.getAllCategories().subscribe({
          next: categories => {
            this.categoriesService.setCategories([...categories]);
          },
          
          error: (err: any) => {
            this.messageService.error('Error fetching categories', err);
          }
        })
        input.value = '';
        this.messageService.success('Category added successfully!');
      },
      error: (err) => {
        // console.error('Error adding category:', err);
        this.messageService.error('Failed to add category', err);
      }
    });

  }
}
