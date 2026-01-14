import { Component, inject } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { PrizeCard } from '../prize-card/prize-card';
import { PrizesService } from '../../../services/prizes'
import { ReadPrizeDTO } from '../../../models/Prize';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prize-list',
  imports: [NzCardModule, NzGridModule, NzListModule, PrizeCard,CommonModule],
  templateUrl: './prize-list.html',
  styleUrl: './prize-list.scss',
})

export class PrizeList {
  public prizesService: PrizesService = inject(PrizesService);
  ngOnInit() {
    this.prizesService.getAllPrizes().subscribe({
      next: prizes => {
        this.prizesService.setAllPrizes(prizes)
      },
      error: (err: any) => {
        console.error('error fetch prizes', err);
      }
    })
  }
}
