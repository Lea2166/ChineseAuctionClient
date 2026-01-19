import { Component } from '@angular/core';
import { PrizeList } from '../../PrizeComponents/prize-list/prize-list';
import { PrizeCard } from '../../PrizeComponents/prize-card/prize-card';
import { AddPrize } from "../../PrizeComponents/add-prize/add-prize";

@Component({
  selector: 'app-prizes',
  imports: [PrizeList, AddPrize],
  templateUrl: './prizes.html',
  styleUrl: './prizes.scss',
})
export class Prizes {

}
