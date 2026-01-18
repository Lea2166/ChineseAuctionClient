import { Component, inject, Input } from '@angular/core';
import { DonorCreateDTO, DonorReadDTO } from '../../../models/Donor';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { DonorsService } from '../../../services/donors';
import { UserService } from '../../../services/user';



interface ItemData {
  id: number;
  firstName?: string;
  lastName?: string;
  company?: string
  address?: string;
  email?: string | undefined;
  phoneNumber?: string;

}
@Component({
  selector: '[app-update-donor]',
  imports: [FormsModule, NzPopconfirmModule],
  templateUrl: './update-donor.html',
  styleUrl: './update-donor.scss',
})
export class UpdateDonor {

  @Input() donor: DonorReadDTO | null = null;
  donorsService: DonorsService = inject(DonorsService);
  userService: UserService = inject(UserService);


  editMode = false;
  tempData!: DonorReadDTO;

  startEdit(): void {
    if (this.donor == null || this.donor == undefined) return
    this.tempData = { ...this.donor };
    this.editMode = true;
  }

  cancelEdit(): void {
    this.editMode = false;
  }

  saveEdit(): void {
    if (this.donor == null || this.donor == undefined) return
    const updatedDonor = { ...this.donor, ...this.tempData };
    
    // const updatedDonorForSend: DonorCreateDTO = {
    //   firstName: updatedDonor.firstName,
    //   lastName: updatedDonor.lastName,
    //   email: updatedDonor.email,
    //   address: updatedDonor.address,
    //   company: updatedDonor.company,
    //   phoneNumber: updatedDonor.phoneNumber
    // }
    console.log("update", updatedDonor);

    this.donorsService.updateDonor(this.donor.id, updatedDonor, this.userService.token()).subscribe({
      next: (response) => {

        this.donor = updatedDonor;
        this.editMode = false;
        console.log("data was updated successfully");
      },
      error: (err) => {
        console.error('error ', err);

      }
    });

  }
}
