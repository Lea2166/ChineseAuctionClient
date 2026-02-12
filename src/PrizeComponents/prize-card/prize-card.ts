import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReadPrizeDTO } from '../../../models/Prize';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatePrize } from "../update-prize/update-prize";
import { NzModalModule } from "ng-zorro-antd/modal";
import { DeletePrize } from "../delete-prize/delete-prize";
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { CartActions } from "../../CartComponents/cart-actions/cart-actions";
import { PrizeDraw } from '../../ruffleComponents/prize-draw/prize-draw';
import { NzTabLinkTemplateDirective } from "ng-zorro-antd/tabs";
import { NzBadgeModule } from "ng-zorro-antd/badge";

@Component({
  selector: 'app-prize-card',
  imports: [NzAvatarModule, NzCardModule, NzIconModule, CommonModule, NzPopconfirmModule, UpdatePrize, NzModalModule, DeletePrize, CartActions, PrizeDraw, NzTabLinkTemplateDirective, NzBadgeModule],
  templateUrl: './prize-card.html',
  styleUrl: './prize-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PrizeCard {

  @Input() prize: ReadPrizeDTO | null = null;
  @Input() isAdmin: boolean = false;
  @Input() isConnected: boolean = false;

  router: Router = inject(Router)
  currentUrl: ActivatedRoute = inject(ActivatedRoute);

  navigate(): void {
    if (this.prize?.id == null || this.prize.id === undefined) return;

    this.router.navigate([this.prize?.id], { relativeTo: this.currentUrl });
  }

  showModal: boolean = false

  open(prize: ReadPrizeDTO | undefined | null): void {
    if (prize == null) {
      return
    }
    this.prize = { ...prize }
    this.showModal = true
  }

  winnersExist(): boolean {
    if (this.prize?.winners && this.prize?.winners.length > 0 && this.prize.qty < 2) {
      return true
    }
    return false
  }


}
