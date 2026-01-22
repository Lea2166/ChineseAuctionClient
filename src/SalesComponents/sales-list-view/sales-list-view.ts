import { Component, Input } from '@angular/core';
import { ReadOrderDTO } from '../../../models/PackageOrderCart';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-sales-list-view',
  imports: [NzTableModule],
  templateUrl: './sales-list-view.html',
  styleUrl: './sales-list-view.scss',
})
export class SalesListView {

  @Input() orders: ReadOrderDTO[] = []
}
