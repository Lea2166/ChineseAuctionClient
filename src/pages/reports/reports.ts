import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TotalRevenueReport } from '../../reports-components/total-revenue-report/total-revenue-report';

@Component({
  selector: 'app-reports',
  imports: [NzButtonModule,TotalRevenueReport],
  templateUrl: './reports.html',
  styleUrl: './reports.scss',
})
export class Reports {

}
