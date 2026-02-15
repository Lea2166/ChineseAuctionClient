import { Component, inject } from '@angular/core';
import { SalesService } from '../../../services/sales';
import { UserService } from '../../../services/user';
import { interval, map, Observable, takeWhile } from 'rxjs';
import { ReportService } from '../../../services/report-service';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from "ng-zorro-antd/card"; 
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-total-revenue-report',
  imports: [NzStatisticModule, NzGridModule,NzIconModule, NzCardModule],
  templateUrl: './total-revenue-report.html',
  styleUrl: './total-revenue-report.scss',
})
export class TotalRevenueReport {
  public reportService = inject(ReportService);
  public userService = inject(UserService);
  
  totalRevenue: number = 0;
  displayValue: number = 0;

  ngOnInit() {
    this.getTotalRevenueReport();
  }

  public getTotalRevenueReport() {
    this.reportService.getRavenue(this.userService.token()).subscribe({
      next: (revenue) => {
        this.totalRevenue = revenue;
        this.startCountAnimation(); 
      },
      error: (error) => {
        console.error('Error fetching total revenue report:', error);
      }
    });
  }

private startCountAnimation() {
  const duration = 500; 
  const speed = 20;     
  
  this.displayValue = 0;

  const totalSteps = duration / speed;
  const increment = Math.max(1, Math.floor(this.totalRevenue / totalSteps));

  const sub = interval(speed)
    .pipe(
      takeWhile(() => this.displayValue < this.totalRevenue)
    )
    .subscribe({
      next: () => {
        this.displayValue += increment;

        if (this.displayValue > this.totalRevenue) {
          this.displayValue = this.totalRevenue;
        }
      },
      complete: () => {
        this.displayValue = this.totalRevenue;
      }
    });
}
}