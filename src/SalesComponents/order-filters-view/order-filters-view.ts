import { Component, EventEmitter, inject, Input, Output, SimpleChange } from '@angular/core';
import { OrderQParams } from '../../../models/Filters';
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { FormBuilder, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReadPrizeDTO } from '../../../models/Prize';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-order-filters-view',
  imports: [NzSpaceModule, NzButtonModule, ReactiveFormsModule, NzFormModule, NzDatePickerModule, NzIconModule, NzSliderModule, NzPopoverModule, FormsModule, NzSelectModule],
  templateUrl: './order-filters-view.html',
  styleUrl: './order-filters-view.scss',
})
export class OrderFiltersView {


  private fb = inject(FormBuilder);

  filters = this.fb.group({
    userEmail: this.fb.control<string | null>(null),
    packagesIds: this.fb.control<number[]>([]),
    prizesIds: this.fb.control<number[]>([]),
    orderDate: this.fb.control<[Date, Date] | null>(null),
    totalPrice: this.fb.control<[0, 999] | null>(null)
  });

  @Input() prizes: ReadPrizeDTO[] = []

  @Output() filtersRequest = new EventEmitter<OrderQParams>()

  cancelFilters() {
    this.filters.reset()
    this.filtersRequest.emit()
  }

  applyFilters(): void {
   
    const filtersForSend: OrderQParams = {
      userEmail: this.filters.get('userEmail')?.value ?? undefined,
      packagesIds: this.filters.get('packagesIds')?.value ?? undefined,
      prizesIds: this.filters.get('prizesIds')?.value ?? undefined,
      orderDate: {
        min: this.filters.get('orderDate')?.value?.[0] ?? undefined,
        max: this.filters.get('orderDate')?.value?.[1] ?? undefined
      },
      totalPrice: {
        min: this.filters.get('totalPrice')?.value?.[0] ?? undefined,
        max: this.filters.get('totalPrice')?.value?.[1] ?? undefined
      }
    }

    this.filtersRequest.emit(filtersForSend)

  }



}
