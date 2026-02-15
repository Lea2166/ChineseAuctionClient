import { Component, inject } from '@angular/core';
import { SalesService } from '../../../services/sales';
import { UserService } from '../../../services/user';
import { Observable } from 'rxjs';
import { ReportService } from '../../../services/report-service';
import { TotalRevenueReportView } from "../total-revenue-report-view/total-revenue-report-view";
@Component({
  selector: 'app-total-revenue-report',
  imports: [TotalRevenueReportView],
  templateUrl: './total-revenue-report.html',
  styleUrl: './total-revenue-report.scss',
})
export class TotalRevenueReport {
  public reportService = inject(ReportService);
  public userService = inject(UserService);
  totalRevenue: number = 0

  ngOnInit() {
    this.getTotalRevenueReport()
  }
  public getTotalRevenueReport() {
    this.reportService.getRavenue(this.userService.token()).subscribe({
      next: (response) => {
        this.totalRevenue = response
        console.log('Total Revenue:', this.totalRevenue);
      },
      error: (error) => {
        console.error('Error fetching total revenue report:', error);
      }
    });
  }
}
