import { Component, Input, SimpleChanges } from '@angular/core';
import { DonorReadDTO } from '../../../models/Donor';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzListItemComponent, NzListHeaderComponent, NzListComponent } from "ng-zorro-antd/list";

interface ParentItemData {
  id: number;
  firstName?: string;
  lastName?: string;
  company?: string
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
    this.buildTableData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['donors']) {
      this.buildTableData();
    }
  }

  buildTableData() {
    this.listOfParentData = [];
    this.listOfChildrenData = [];

    this.listOfParentData = this.donors.map(donor => {
      return {
        id: donor.id,
        firstName: donor.firstName,
        lastName: donor.lastName,
        address: donor.address,
        company: donor.company,
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
  }
}
