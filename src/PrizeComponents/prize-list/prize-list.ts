import { ChangeDetectionStrategy, Component, inject, SimpleChanges } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { PrizeCard } from '../prize-card/prize-card';
import { PrizesService } from '../../../services/prizes'
import { ReadPrizeDTO } from '../../../models/Prize';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user';
import { MessagesService } from '../../../services/messages';

@Component({
  selector: 'app-prize-list',
  imports: [NzCardModule, NzGridModule, NzListModule, PrizeCard, CommonModule],
  templateUrl: './prize-list.html',
  styleUrl: './prize-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PrizeList {
  prizesService: PrizesService = inject(PrizesService);
  messagesService = inject(MessagesService);
  userService: UserService = inject(UserService);

  ngOnInit() {
    this.prizesService.getAllPrizes({}).subscribe({
      next: prizes => {
        this.prizesService.setAllPrizes([...prizes])

      },
      error: (err: any) => {
        this.messagesService.error('Error fetching prizes', err);
        console.error('error fetch prizes', err);

      }
    })
  }

}
