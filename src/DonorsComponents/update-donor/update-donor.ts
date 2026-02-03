import { Component, inject, Input } from '@angular/core';
import {  DonorReadDTO } from '../../../models/Donor';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { DonorsService } from '../../../services/donors';
import { UserService } from '../../../services/user';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DeleteDonor } from "../delete-donor/delete-donor";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { MessagesService } from '../../../services/messages';



@Component({
  selector: '[app-update-donor]',
  imports: [FormsModule, NzPopconfirmModule,NzInputModule, NzButtonModule,NzIconModule, NzPopconfirmModule, DeleteDonor],
  templateUrl: './update-donor.html',
  styleUrl: './update-donor.scss',
})
export class UpdateDonor {

  @Input() donor: DonorReadDTO | null = null;
  donorsService: DonorsService = inject(DonorsService);
  userService: UserService = inject(UserService);
  messageService = inject(MessagesService);


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

    this.donorsService.updateDonor(this.donor.id, updatedDonor, this.userService.token()).subscribe({
      next: () => {
        this.donor = updatedDonor;
        this.editMode = false;
        this.messageService.success("Donor updated successfully");
      },
      error: (err) => {
        console.error('error ', err);
        this.messageService.error('Error updating donor', err);

      }
    });

  }
}
