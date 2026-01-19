import { Component } from '@angular/core';
import { DonorsList } from '../../DonorsComponents/donors-list/donors-list';

@Component({
  selector: 'app-donors',
  imports: [DonorsList],
  templateUrl: './donors.html',
  styleUrl: './donors.scss',
})
export class Donors {

}
