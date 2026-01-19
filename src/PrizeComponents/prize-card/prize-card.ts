import { Component, inject, Input } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReadPrizeDTO } from '../../../models/Prize';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatePrize } from "../update-prize/update-prize";

@Component({
  selector: 'app-prize-card',
  imports: [NzAvatarModule, NzCardModule, NzIconModule, CommonModule, UpdatePrize],
  templateUrl: './prize-card.html',
  styleUrl: './prize-card.scss',
})
export class PrizeCard {

  @Input() prize: ReadPrizeDTO | undefined;

  router: Router = inject(Router)
  currentUrl:ActivatedRoute=inject(ActivatedRoute);


  navigate(): void {
    if (this.prize?.id == null || this.prize.id === undefined) return;

    this.router.navigate([this.prize?.id], { relativeTo: this.currentUrl });
  }
}
