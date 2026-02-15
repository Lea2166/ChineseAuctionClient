import { Component, Input } from '@angular/core';
import { ReadWinnerDTO } from '../../../models/Winner';
import { NzCardModule } from "ng-zorro-antd/card";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzEmptyModule } from "ng-zorro-antd/empty";
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-winners-report-view',
  imports: [NzCardModule, NzLayoutModule,NzIconModule, NzGridModule,NzCollapseModule, NzDescriptionsModule, NzTagModule, NzEmptyModule],
  templateUrl: './winners-report-view.html',
  styleUrl: './winners-report-view.scss',
})
export class WinnersReportView {

  @Input() winners: ReadWinnerDTO[] = []


}
