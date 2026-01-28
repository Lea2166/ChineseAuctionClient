import { Component } from '@angular/core';
import { DonorsList } from '../../DonorsComponents/donors-list/donors-list';
import { AddDonor } from '../../DonorsComponents/add-donor/add-donor';
import { UpdateDonor } from '../../DonorsComponents/update-donor/update-donor';
import { DonorsFilters } from "../../DonorsComponents/donors-filters/donors-filters";

@Component({
  selector: 'app-donors',
  imports: [DonorsList, AddDonor, DonorsFilters],
  templateUrl: './donors.html',
  styleUrl: './donors.scss',
})
export class Donors {

}
