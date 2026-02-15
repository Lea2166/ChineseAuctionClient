import { Component, inject } from '@angular/core';
import { ReportService } from '../../../services/report-service';
import { UserService } from '../../../services/user';
import { ReadWinnerDTO } from '../../../models/Winner';
import { WinnersReportView } from "../winners-report-view/winners-report-view";
@Component({
  selector: 'app-winners-report',
  imports: [WinnersReportView],
  templateUrl: './winners-report.html',
  styleUrl: './winners-report.scss',
})

export class WinnersReport {
  public reportService = inject(ReportService);
  public userService = inject(UserService);

  winners: ReadWinnerDTO[] = []

  ngOnInit() {
    this.getwinnersReport()
  }

  public getwinnersReport() {
    this.reportService.getAllWinners(this.userService.token()).subscribe({
      next: (winners) => {
        this.winners = [...winners]
        console.log('Report for winners:', this.winners);

      },
      error: (error) => {
        console.error('Error fetching report for winners:', error);

      }
    });
  }
}
