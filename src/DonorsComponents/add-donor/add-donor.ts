import { Component, inject } from '@angular/core';
import { DonorsService } from '../../../services/donors';
import { DonorCreateDTO } from '../../../models/Donor';
import { UserService } from '../../../services/user';
import { Router } from '@angular/router';
import { AddDonorView } from '../add-donor-view/add-donor-view';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-add-donor',
  imports: [AddDonorView, NzButtonModule, NzModalModule],
  templateUrl: './add-donor.html',
  styleUrl: './add-donor.scss',
})
export class AddDonor {
  donorsService: DonorsService = inject(DonorsService);
  userService: UserService = inject(UserService);
  router: Router = inject(Router);


  onSaveDonor(data: DonorCreateDTO) {

    this.donorsService.addDonor(data, this.userService.token()).subscribe({
      next: () => {
        console.log("donor added successfully");

        this.donorsService.getAlldonors(this.userService.token()).subscribe({
          next: donors => {
            this.donorsService.setDonors([...donors]);
            this.showModal = false;
          },
          error: (err: any) => {
            console.error('error fetch donors', err);
          }
        })

      },
      error: (err) => console.error('Error saving:', err)
    });



  }

  showModal: boolean = false

  open(): void {
    this.showModal = true;
  }





}
