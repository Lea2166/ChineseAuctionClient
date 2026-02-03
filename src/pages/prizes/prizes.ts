import { Component, inject } from '@angular/core';
import { PrizeList } from '../../PrizeComponents/prize-list/prize-list';
import { AddPrize } from "../../PrizeComponents/add-prize/add-prize";

import { PrizeFilters } from "../../PrizeComponents/prize-filters/prize-filters";
import { UserService } from '../../../services/user';

@Component({
  selector: 'app-prizes',
  imports: [PrizeList, AddPrize, PrizeFilters],
  templateUrl: './prizes.html',
  styleUrl: './prizes.scss',
})
export class Prizes {
  userService = inject(UserService);
  isAdmin(): boolean {
    const user = this.userService.user();
    return user?.role === 'Admin';
  }
}
