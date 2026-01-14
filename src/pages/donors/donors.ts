import { Component } from '@angular/core';
import { DonorsList } from '../../DonorsComponents/donors-list/donors-list';
import { AddDonor } from '../../DonorsComponents/add-donor/add-donor';
import { UpdateDonor } from '../../DonorsComponents/update-donor/update-donor';

@Component({
  selector: 'app-donors',
  imports: [DonorsList, AddDonor],
  templateUrl: './donors.html',
  styleUrl: './donors.scss',
})
export class Donors {

}
