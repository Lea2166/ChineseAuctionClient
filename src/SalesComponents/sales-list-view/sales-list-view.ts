import { Component, Input } from '@angular/core';
import { ReadOrderDTO, ReadSimpleOrderDTO } from '../../../models/PackageOrderCart';
import { NzTableModule } from 'ng-zorro-antd/table';
import { OneOrder } from '../one-order/one-order';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-sales-list-view',
  imports: [NzTableModule, OneOrder, NzButtonModule,NzModalModule],
  templateUrl: './sales-list-view.html',
  styleUrl: './sales-list-view.scss',
})
export class SalesListView {

  @Input() orders: ReadSimpleOrderDTO[] = []

  showModal = false;
  selectedOrderId: number = 0;

  open(id: number): void {
    this.selectedOrderId = id; 
    this.showModal = true;  
  }





  

}
