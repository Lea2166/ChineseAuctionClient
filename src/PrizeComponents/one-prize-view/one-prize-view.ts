import { Component, Input, signal } from '@angular/core';
import { ReadPrizeDTO } from '../../../models/Prize';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-one-prize-view',
  imports: [NzBreadCrumbModule,
    FormsModule,
    RouterModule,
    NzGridModule,
    NzBreadCrumbModule,
    NzImageModule,
    NzTagModule,
    NzTypographyModule,
    NzDividerModule,
    NzStatisticModule,
    NzInputNumberModule,
    NzButtonModule,
    NzIconModule,
    NzCardModule],
  templateUrl: './one-prize-view.html',
  styleUrl: './one-prize-view.scss',
})
export class OnePrizeView {
 
  @Input() prize: ReadPrizeDTO | null = null


}
