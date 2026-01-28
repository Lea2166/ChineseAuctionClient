import { Component, inject } from '@angular/core';
import { PrizesService } from '../../../services/prizes';
import { DonorsService } from '../../../services/donors';
import { UserService } from '../../../services/user';
import { ReadPrizeDTO } from '../../../models/Prize';
import { DonorQParams } from '../../../models/Filters';
import { DonorsFiltersView } from '../donors-filters-view/donors-filters-view';

@Component({
  selector: 'app-donors-filters',
  imports: [DonorsFiltersView],
  templateUrl: './donors-filters.html',
  styleUrl: './donors-filters.scss',
})
export class DonorsFilters {

  userService: UserService = inject(UserService);
  prizesService: PrizesService = inject(PrizesService)
  donorsService: DonorsService = inject(DonorsService);

  prizes: ReadPrizeDTO[] = []


  ngOnInit() {

    const cachedPrizes = this.prizesService.prizes();

    if (cachedPrizes && cachedPrizes.length > 0) {
      this.prizes = cachedPrizes;
    } else {
      this.prizesService.getAllPrizes().subscribe(prizes => {
        this.prizes = prizes;
        this.prizesService.setAllPrizes(prizes);
      });
    }



  }

  sendFilters(filters: DonorQParams) {
    this.donorsService.getAlldonors(this.userService.token(), filters).subscribe({
      next: donors => {
        this.donorsService.setDonors([...donors])


      },
      error: (err: any) => {
        console.error('error fetch prizes with filters', err);
      }
    })
  }
}
