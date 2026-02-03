import { Component, inject } from '@angular/core';
import { PrizeFiltersView } from "../prize-filters-view/prize-filters-view";
import { CategoriesService } from '../../../services/categories';
import { UserService } from '../../../services/user';
import { PrizeQParams } from '../../../models/Filters';
import { PrizesService } from '../../../services/prizes';
import { DonorsService } from '../../../services/donors';
import { MessagesService } from '../../../services/messages';

@Component({
  selector: 'app-prize-filters',
  imports: [PrizeFiltersView],
  templateUrl: './prize-filters.html',
  styleUrl: './prize-filters.scss',
})
export class PrizeFilters {

  categoriesService: CategoriesService = inject(CategoriesService);
  userService: UserService = inject(UserService);
  prizesService: PrizesService = inject(PrizesService);
  donorService: DonorsService = inject(DonorsService);
  messageService = inject(MessagesService);

  ngOnInit() {
    this.categoriesService.getAllCategories().subscribe({
      next: categories => {
        this.categoriesService.setCategories([...categories])

      },
      error: (err: any) => {
        console.error('error fetch categories', err);
        
      }
    });

    if (this.userService.user()?.role === 'Admin') {
      this.donorService.getAlldonors(this.userService.token(), {}).subscribe({
        next: donors => {
          this.donorService.setDonors([...donors])
        },
        error: (err: any) => {
          console.error('error fetch donors', err);
        }
      });
    }


  }

  applyFilters(prizeQParams: PrizeQParams) {
    this.prizesService.getAllPrizes(prizeQParams).subscribe({
      next: prizes => {
        this.prizesService.setAllPrizes([...prizes])

       
      },
      error: (err: any) => {
        console.error('error fetch prizes', err);
        this.messageService.error('Error fetching prizes', err);
      }
    })
  }
}
