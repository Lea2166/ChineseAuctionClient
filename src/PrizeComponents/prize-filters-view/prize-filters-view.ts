import { Component, Input, SimpleChanges } from '@angular/core';
import { Category } from '../../../models/PackageOrderCart';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AddCategory } from "../../CategoriesComponents/add-category/add-category";
import { DeleteCategory } from "../../CategoriesComponents/delete-category/delete-category";

@Component({
  selector: 'app-prize-filters-view',
  imports: [NzButtonModule, NzSelectModule, NzDividerModule, NzInputModule, NzIconModule, AddCategory, DeleteCategory],
  templateUrl: './prize-filters-view.html',
  styleUrl: './prize-filters-view.scss',
})
export class PrizeFiltersView {

  @Input() categories: Category[] = [];



}
