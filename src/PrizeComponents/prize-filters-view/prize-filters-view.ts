import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { Category } from '../../../models/PackageOrderCart';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AddCategory } from "../../CategoriesComponents/add-category/add-category";
import { DeleteCategory } from "../../CategoriesComponents/delete-category/delete-category";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { OrderQParams, PrizeQParams } from '../../../models/Filters';
import { DonorReadDTO } from '../../../models/Donor';
import { NzFormModule } from 'ng-zorro-antd/form';


@Component({
  selector: 'app-prize-filters-view',
  imports: [NzButtonModule, NzSelectModule,NzFormModule, ReactiveFormsModule, NzDividerModule, NzInputModule, NzIconModule, AddCategory, DeleteCategory],
  templateUrl: './prize-filters-view.html',
  styleUrl: './prize-filters-view.scss',
})
export class PrizeFiltersView {


  private fb = inject(FormBuilder);

  filters = this.fb.group({
    name: this.fb.control<string | null>(null),
    categoriesIds: this.fb.control<number[]>([]),
    donorId: this.fb.control<number | null>(null),
    numOfTickets: this.fb.control<number | null>(null)
  });

  @Input() categories: Category[] = [];
  @Input() donors: DonorReadDTO[] = [];
  @Input() isAdmin: boolean = false;

  @Output() filtersRequest = new EventEmitter<PrizeQParams>()

  cancelFilters() {
    this.filters.reset()
    this.filtersRequest.emit()
  }

  applyFilters(): void {

    const filtersForSend: PrizeQParams = {
      name: this.filters.get('name')?.value ?? undefined,
      CategoriesIds: this.filters.get('categoriesIds')?.value ?? undefined,
      donorId: this.filters.get('donorId')?.value ?? undefined,
      numOfTickets: this.filters.get('numOfTickets')?.value ?? undefined
    }
    
    
    this.filtersRequest.emit(filtersForSend)

  }



}




