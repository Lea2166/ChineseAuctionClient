import { Component, Input, SimpleChanges } from '@angular/core';
import { DonorReadDTO } from '../../../models/Donor';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ɵNzTransitionPatchDirective } from "ng-zorro-antd/core/transition-patch";
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzListItemComponent, NzListHeaderComponent, NzListComponent } from "ng-zorro-antd/list";

interface ParentItemData {
  id: number;
  firstName?: string;
  lastName?: string;
  address?: string;
  email?: number | string;
  phoneNumber?: string;
  prizes: ChildrenItemData[];
  expand: boolean;

}

interface ChildrenItemData {
  id: number;
  name?: string;
  description?: string;
  category?: string;


}

@Component({
  selector: 'app-donors-list-view',
  imports: [NzDividerModule, NzTableModule, NzDescriptionsModule, NzListItemComponent, NzListHeaderComponent, NzListComponent],
  templateUrl: './donors-list-view.html',
  styleUrl: './donors-list-view.scss',
})

export class DonorsListView {
  @Input() donors: DonorReadDTO[] | [] = []

  listOfParentData: ParentItemData[] = [];
  listOfChildrenData: ChildrenItemData[] = [];

  ngOnInit(): void {

    this.listOfParentData = [];
    this.listOfChildrenData = [];

    this.listOfParentData = this.donors.map(donor => {
      return {
        id: donor.id,
        firstName: donor.firstName,
        lastName: donor.lastName,
        address: donor.address,
        email: donor.email,
        phoneNumber: donor.phoneNumber,
        expand: false,

        prizes: (donor.prizes || []).map(prize => ({
          id: prize.id,
          name: prize.name,
          category: prize.categoryName,
          description: prize.description
        }))
      };
    });

    // for (let i = 0; i < this.donors.length; ++i) {
    //   const donor = this.donors[i];

    //   this.listOfParentData.push({
    //     id: donor.id, 
    //     firstName: donor.firstName,
    //     lastName: donor.lastName,
    //     address: donor.address,
    //     email: donor.email,
    //     phoneNumber: donor.phoneNumber,
    //     prizes:donor.prizes,
    //     expand: false,

    //   });


    //   if (donor.prizes && donor.prizes.length > 0) {
    //     for (let j = 0; j < donor.prizes.length; ++j) {
    //       const prize = donor.prizes[j];
    //       this.listOfChildrenData.push({
    //         id: prize.id || j, 
    //         name: prize.name,
    //         category: prize.categoryName
    //       });
    //     }
    //   }
    // }
  }


}
