import { Component } from '@angular/core';
import { OrderQParams } from '../../../models/Filters';
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-filters-view',
  imports: [NzSpaceModule, NzButtonModule, NzDatePickerModule, NzSliderModule, NzPopoverModule,FormsModule],
  templateUrl: './order-filters-view.html',
  styleUrl: './order-filters-view.scss',
})
export class OrderFiltersView {

  filters: OrderQParams = {}

  priceRange: [number, number] = [0, 999];

  onPriceChange(value: number[]): void {
    console.log('Range', value);
  }

  applyFilter(): void {
    const filterParams = {
      price: {
        min: this.priceRange[0],
        max: this.priceRange[1]
      }
    };

    console.log('שולח לשרת:', filterParams);
  }



}
