import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-total-revenue-report-view',
  imports: [NzButtonModule],
  templateUrl: './total-revenue-report-view.html',
  styleUrl: './total-revenue-report-view.scss',
})
export class TotalRevenueReportView {

  @Input() totalRevenue: number = 0

}
