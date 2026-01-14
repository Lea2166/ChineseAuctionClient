import { Component, Input } from '@angular/core';
import { DonorReadDTO } from '../../../models/Donor';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';



interface ItemData {
  id: number;
  firstName?: string;
  lastName?: string;
  company?: string
  address?: string;
  email?: string  | undefined;
  phoneNumber?: string;

}
@Component({
  selector: '[app-update-donor]',
  imports: [FormsModule, NzPopconfirmModule],
  templateUrl: './update-donor.html',
  styleUrl: './update-donor.scss',
})
export class UpdateDonor {

  @Input() donor: DonorReadDTO | null = null

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
    Object.assign(this.donor, this.tempData);
    this.editMode = false;
  }
}
