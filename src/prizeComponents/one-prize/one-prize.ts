import { Component, inject, Input, signal } from '@angular/core';
import { PrizesService } from '../../../services/prizes';
import { ActivatedRoute } from '@angular/router';
import { OnePrizeView } from '../one-prize-view/one-prize-view';

@Component({
  selector: 'app-one-prize',
  imports: [OnePrizeView],
  templateUrl: './one-prize.html',
  styleUrl: './one-prize.scss',
})
export class OnePrize {

  public prizesService: PrizesService = inject(PrizesService);
  public activateRoute: ActivatedRoute = inject(ActivatedRoute);
  id = signal<number>(0);

  ngOnInit() {

    this.activateRoute.params.subscribe(params => this.id.set(params['id']))


    this.prizesService.getOnePrize(this.id()).subscribe({
      next: prize => {

        this.prizesService.setPrize(prize)
        console.log(prize);


      },
      error: (err: any) => {
        console.error(`error fetch prize with id ${this.id}`, err);
      }
    })
  }
}
