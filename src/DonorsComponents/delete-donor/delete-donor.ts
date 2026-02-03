import { Component, inject, Input } from '@angular/core';
import { NzIconModule } from "ng-zorro-antd/icon";
import { UserService } from '../../../services/user';
import { DonorsService } from '../../../services/donors';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { MessagesService } from '../../../services/messages';

@Component({
  selector: 'app-delete-donor',
  imports: [NzIconModule,NzPopconfirmModule],
  templateUrl: './delete-donor.html',
  styleUrl: './delete-donor.scss',
})
export class DeleteDonor {

  userService: UserService = inject(UserService)
  donorService: DonorsService = inject(DonorsService);
  messageService = inject(MessagesService);

  @Input() id: number | null | undefined = null

  delete() {

    if (!this.userService.token || this.userService.user()?.role !== 'Admin' || !this.id || this.id == 0) {
      console.log("You havn't premission to do this action");
      return;

    }
    this.donorService.deleteDonor(this.id, this.userService.token()).subscribe({
      next: () => {

        this.messageService.warning('Donor deleted successfully', '');
      },
      error: (err: any) => {
        console.error('error delete donor', err);
        this.messageService.error('Error deleting donor', err);
      }
    })

  }
}
