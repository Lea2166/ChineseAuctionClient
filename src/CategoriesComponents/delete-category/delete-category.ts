import { Component, inject, Input } from '@angular/core';
import { NzButtonComponent } from "ng-zorro-antd/button";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CategoriesService } from '../../../services/categories';
import { UserService } from '../../../services/user';
import { MessagesService } from '../../../services/messages';

@Component({
  selector: 'app-delete-category',
  imports: [NzButtonComponent, NzIconModule],
  templateUrl: './delete-category.html',
  styleUrl: './delete-category.scss',
})
export class DeleteCategory {

  @Input() id!: number;
  categoriesService: CategoriesService = inject(CategoriesService);
  userService: UserService = inject(UserService);
  messageService = inject(MessagesService);

  deleteCategory() {
    if (!this.userService.token || this.userService.user()?.role !== 'Admin' || !this.id || this.id == 0) {
      console.log("You havn't premission to do this action");
      return;

    }
    this.categoriesService.deleteCategory(this.id, this.userService.token()).subscribe({
      next: () => {
        this.messageService.warning('Category deleted successfully','');
      },
      error: (err) => {
        console.error('Error deleting category:', err);
        this.messageService.error('Error deleting category', err);
      }
    });
  }
}
