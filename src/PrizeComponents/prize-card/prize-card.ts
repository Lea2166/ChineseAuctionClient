import { Component, Input } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReadPrizeDTO } from '../../../models/Prize';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prize-card',
  imports: [NzAvatarModule, NzCardModule, NzIconModule, CommonModule],
  templateUrl: './prize-card.html',
  styleUrl: './prize-card.scss',
})
export class PrizeCard {
  @Input() prize: ReadPrizeDTO | undefined;
}
