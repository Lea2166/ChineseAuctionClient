import { Component, inject, Input } from '@angular/core';
import {  DonorReadDTO } from '../../../models/Donor';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { DonorsService } from '../../../services/donors';
import { UserService } from '../../../services/user';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DeleteDonor } from "../delete-donor/delete-donor";
import { NzIconModule } from 'ng-zorro-antd/icon';



@Component({
  selector: '[app-update-donor]',
  imports: [FormsModule, NzPopconfirmModule, NzButtonModule,NzIconModule, NzPopconfirmModule, DeleteDonor],
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
