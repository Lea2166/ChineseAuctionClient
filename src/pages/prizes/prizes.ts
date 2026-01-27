import { Component } from '@angular/core';
import { PrizeList } from '../../PrizeComponents/prize-list/prize-list';
import { AddPrize } from "../../PrizeComponents/add-prize/add-prize";

import { PrizeFilters } from "../../PrizeComponents/prize-filters/prize-filters";

@Component({
  selector: 'app-prizes',
  imports: [PrizeList, AddPrize, PrizeFilters],
  templateUrl: './prizes.html',
  styleUrl: './prizes.scss',
})
export class Prizes {

}
