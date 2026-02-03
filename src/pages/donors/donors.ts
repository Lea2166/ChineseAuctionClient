import { Component, inject } from '@angular/core';
import { DonorsList } from '../../DonorsComponents/donors-list/donors-list';
import { AddDonor } from '../../DonorsComponents/add-donor/add-donor';
import { UpdateDonor } from '../../DonorsComponents/update-donor/update-donor';
import { DonorsFilters } from "../../DonorsComponents/donors-filters/donors-filters";
import { UserService } from '../../../services/user';
import { NotFound } from "../../not-found/not-found";

@Component({
  selector: 'app-donors',
  imports: [DonorsList, AddDonor, DonorsFilters, NotFound],
  templateUrl: './donors.html',
  styleUrl: './donors.scss',
})
export class Donors {

  userService = inject(UserService);
  isAdmin(): boolean {
    const user = this.userService.user();
    return user?.role === 'Admin';
  }
}
