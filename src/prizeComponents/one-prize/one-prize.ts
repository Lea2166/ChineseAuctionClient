import { Component, inject, Input, signal } from '@angular/core';
import { PrizesService } from '../../../services/prizes';
import { ActivatedRoute } from '@angular/router';
import { OnePrizeView } from '../one-prize-view/one-prize-view';
import { MessagesService } from '../../../services/messages';

@Component({
  selector: 'app-one-prize',
  imports: [OnePrizeView],
  templateUrl: './one-prize.html',
  styleUrl: './one-prize.scss',
})

export class OnePrize {

  prizesService: PrizesService = inject(PrizesService);
  activateRoute: ActivatedRoute = inject(ActivatedRoute);
  messageService = inject(MessagesService);

  id = signal<number>(0);

  ngOnInit() {

    this.activateRoute.params.subscribe(params => this.id.set(params['id']))


    this.prizesService.getOnePrize(this.id()).subscribe({
      next: prize => {

        this.prizesService.setPrize(prize)
      },
      error: (err: any) => {
        console.error(`error fetch prize with id ${this.id}`, err);
        this.messageService.error(`Error fetching prize`, err);
      }
    })
  }
}
