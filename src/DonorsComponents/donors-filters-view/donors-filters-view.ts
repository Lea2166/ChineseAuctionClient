import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ReadPrizeDTO } from '../../../models/Prize';
import { DonorQParams } from '../../../models/Filters';
import { NzFormModule } from "ng-zorro-antd/form";
import { NzSliderModule } from "ng-zorro-antd/slider";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-donors-filters-view',
  imports: [NzFormModule, NzSliderModule,ReactiveFormsModule, NzButtonModule,NzInputModule,NzIconModule,NzSelectModule],
  templateUrl: './donors-filters-view.html',
  styleUrl: './donors-filters-view.scss',
})
export class DonorsFiltersView {

  private fb = inject(FormBuilder);

  filters = this.fb.group({
    email: this.fb.control<string | null>(null),
    name: this.fb.control<string | null>(null),
    prizesIds: this.fb.control<number[]>([]),

  });

  @Input() prizes: ReadPrizeDTO[] = []


  @Output() filtersRequest = new EventEmitter<DonorQParams>()

  cancelFilters() {
    this.filters.reset()
    this.filtersRequest.emit()
  }

  applyFilters(): void {

    const filtersForSend: DonorQParams = {
      email: this.filters.get('email')?.value ?? undefined,
      name: this.filters.get('name')?.value ?? undefined,
      prizesIds: this.filters.get('prizesIds')?.value ?? undefined,

    }

    this.filtersRequest.emit(filtersForSend)

  }

}
