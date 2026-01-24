import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReadOrderDTO } from '../../../models/PackageOrderCart';
import { CommonModule } from '@angular/common';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'app-one-order-view',
  imports: [
    CommonModule,
    NzDescriptionsModule,
    NzIconModule,
    NzTagModule,
    NzBadgeModule,
    NzCardModule,
    NzSpaceModule,
    NzDividerModule,
    NzListModule],
  templateUrl: './one-order-view.html',
  styleUrl: './one-order-view.scss',
})
export class OneOrderView {

  @Input() order: ReadOrderDTO | null = null;
  // @Input() visible: boolean = false;
  // @Output() requestClose = new EventEmitter<void>();



}
