
import { Component, effect, EventEmitter, inject, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CreatePrizeDTO } from '../../../models/Prize';
import { AddPrizeView } from '../add-prize-view/add-prize-view';
import { PrizesService } from '../../../services/prizes';
import { DonorsService } from '../../../services/donors';
import { CategoriesService } from '../../../services/categories';
import { DonorReadDTO } from '../../../models/Donor';
import { UserService } from '../../../services/user';
import { Category } from '../../../models/PackageOrderCart';

@Component({
  selector: 'app-add-prize',
  imports: [NzButtonModule, NzDatePickerModule, NzDrawerModule, NzFormModule, NzInputModule, NzSelectModule, AddPrizeView],
  templateUrl: './add-prize.html',
  styleUrl: './add-prize.scss',
})
export class AddPrize {
  
  public UserService = inject(UserService);
  public donorsService = inject(DonorsService);
  public prizesService: PrizesService = inject(PrizesService);
  public CategoriesService = inject(CategoriesService);
  public donors: DonorReadDTO[] = [];
  public categories: Category[] = [];

  handleCreatePrize(prizeToAdd: CreatePrizeDTO) {
    this.prizesService.setSimplePrize(prizeToAdd, this.UserService.token()).subscribe({
      next: () => {
        console.log("donor added successfully");
        this.prizesService.getAllPrizes().subscribe({
          next: prizes => {
            this.prizesService.setAllPrizes([...prizes]);

          },
          error: (err: any) => {
            console.error('error fetch donors', err);
          }
        })

      },
      error: (err: any) => {
        console.error('Error creating prize', err);
      }
    });
  }

  ngOnInit() {

    this.donorsService.getAlldonors(this.UserService.token()).subscribe({
      next: donors => {
        this.donorsService.setDonors([...donors])
        this.donors = donors;
      },
      error: (err: any) => {
        console.error('error fetch donors', err);
      }
    })

    this.CategoriesService.getAllCategories().subscribe({
      next: categories => {
        this.CategoriesService.setCategories([...categories])
        this.categories = categories;
      },
      error: (err: any) => {
        console.error('error fetch donors', err);
      }
    })

  }
  showModal: boolean = false

  open(): void {
    this.showModal = true;
  }
}
