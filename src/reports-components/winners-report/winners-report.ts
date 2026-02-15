import { Component, inject } from '@angular/core';
import { ReportService } from '../../../services/report-service';
import { UserService } from '../../../services/user';
@Component({
  selector: 'app-winners-report',
  imports: [],
  templateUrl: './winners-report.html',
  styleUrl: './winners-report.scss',
})
export class WinnersReport {
public reportService = inject(ReportService);
public userService = inject(UserService);
public getwinnersReport() {
  this.reportService.getReportForWinners(this.userService.token()).subscribe({ 
    next: (response) => {
      console.log('Report for winners:', response);
    },
    error: (error) => {
      console.error('Error fetching report for winners:', error);
    }
  });
}
}
