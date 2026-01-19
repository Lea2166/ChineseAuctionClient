import { Component, inject } from '@angular/core';
import { DonorsService } from '../../../services/donors'
import { UserService } from '../../../services/user'
import { DonorsListView } from "../donors-list-view/donors-list-view";
import { NzSpinComponent } from "ng-zorro-antd/spin";

@Component({
  selector: 'app-donors-list',
  imports: [DonorsListView, NzSpinComponent],
  templateUrl: './donors-list.html',
  styleUrl: './donors-list.scss',
})
export class DonorsList {

  public donorsService: DonorsService = inject(DonorsService);
  public userService: UserService = inject(UserService);

  ngOnInit() {
    this.donorsService.getAlldonors(this.userService.token()).subscribe({
      next: donors => {
        this.donorsService.setDonors([...donors])
      },
      error: (err: any) => {
        console.error('error fetch donors', err);
      }
    })
  }


}
