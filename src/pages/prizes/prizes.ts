import { Component } from '@angular/core';
import { PrizeList } from '../../PrizeComponents/prize-list/prize-list';
import { PrizeCard } from '../../PrizeComponents/prize-card/prize-card';

@Component({
  selector: 'app-prizes',
  imports: [PrizeList],
  templateUrl: './prizes.html',
  styleUrl: './prizes.scss',
})
export class Prizes {

}
