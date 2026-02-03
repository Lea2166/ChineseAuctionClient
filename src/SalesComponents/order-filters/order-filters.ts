import { Component, inject } from '@angular/core';
import { OrderFiltersView } from "../order-filters-view/order-filters-view";
import { SalesService } from '../../../services/sales';
import { UserService } from '../../../services/user';
import { OrderQParams } from '../../../models/Filters';
import { PrizesService } from '../../../services/prizes';
import { ReadPrizeDTO, ReadSimplePrizeDTO } from '../../../models/Prize';
import { Packages } from '../../pages/packages/packages';
import { ReadPackageDTO } from '../../../models/PackageOrderCart';
import { PackagesService } from '../../../services/packages';
import { log } from 'ng-zorro-antd/core/logger';
import { MessagesService } from '../../../services/messages';

@Component({
  selector: 'app-order-filters',
  imports: [OrderFiltersView],
  templateUrl: './order-filters.html',
  styleUrl: './order-filters.scss',
})
export class OrderFilters {

  salesService: SalesService = inject(SalesService);
  userService: UserService = inject(UserService);
  prizesService: PrizesService = inject(PrizesService)
  packagesService: PackagesService = inject(PackagesService)
  messageService = inject(MessagesService);

  prizes: ReadPrizeDTO[] = []
  packages: ReadPackageDTO[] = []



  ngOnInit() {

    const cachedPrizes = this.prizesService.prizes();

    if (cachedPrizes && cachedPrizes.length > 0) {
      this.prizes = cachedPrizes;
    } else {
      this.prizesService.getAllPrizes({}).subscribe(prizes => {
        this.prizes = prizes;
        this.prizesService.setAllPrizes(prizes);
      });
    }


    const cachedPackages = this.packagesService.packages();

    if (cachedPackages && cachedPackages.length > 0) {
      this.packages = cachedPackages;
    } else {
      this.packagesService.getAllPackages().subscribe(packages => {
        this.packages = packages;
        this.packagesService.setAllPackages([...packages]);
        

      });
    }

  }

  sendFilters(filters: OrderQParams) {
    this.salesService.getAllOrders(this.userService.token(), filters).subscribe({
      next: orders => {
        this.salesService.setAllOrders([...orders])
      },
      error: (err: any) => {
        console.error('error fetch prizes with filters', err);
        this.messageService.error('Error fetching orders with filters', err);
      }
    })
  }

}
