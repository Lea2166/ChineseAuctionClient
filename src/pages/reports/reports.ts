import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TotalRevenueReport } from '../../reports-components/total-revenue-report/total-revenue-report';
import { WinnersReport } from "../../reports-components/winners-report/winners-report";
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-reports',
  imports: [NzButtonModule, TotalRevenueReport, WinnersReport,NzGridModule],
  templateUrl: './reports.html',
  styleUrl: './reports.scss',
})
export class Reports {

}
