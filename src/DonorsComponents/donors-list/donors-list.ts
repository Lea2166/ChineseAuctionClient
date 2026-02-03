import { Component, inject } from '@angular/core';
import { DonorsService } from '../../../services/donors'
import { UserService } from '../../../services/user'
import { DonorsListView } from "../donors-list-view/donors-list-view";
import { NzSpinComponent } from "ng-zorro-antd/spin";
import { MessagesService } from '../../../services/messages';

@Component({
  selector: 'app-donors-list',
  imports: [DonorsListView, NzSpinComponent],
  templateUrl: './donors-list.html',
  styleUrl: './donors-list.scss',
})
export class DonorsList {

  donorsService: DonorsService = inject(DonorsService);
  userService: UserService = inject(UserService);
  messageService = inject(MessagesService);


  ngOnInit() {
    this.donorsService.getAlldonors(this.userService.token(), {}).subscribe({
      next: donors => {
        this.donorsService.setDonors([...donors])
      },
      error: (err: any) => {
        console.error('error fetch donors', err);
        this.messageService.error('Error fetching donors', err);
      }
    })
  }


}
