import { Component, Input, signal } from '@angular/core';
import { ReadPrizeDTO } from '../../../models/Prize';

@Component({
  selector: 'app-one-prize-view',
  imports: [],
  templateUrl: './one-prize-view.html',
  styleUrl: './one-prize-view.scss',
})
export class OnePrizeView {
  // @Input() prize=signal<ReadPrizeDTO | null>(null);
  @Input() prize: ReadPrizeDTO | null = null


}
