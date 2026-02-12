import { Component } from '@angular/core';
import { NzContentComponent, NzLayoutModule } from "ng-zorro-antd/layout";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from "ng-zorro-antd/statistic";
import { NzBadgeModule } from "ng-zorro-antd/badge";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { RouterLink } from '@angular/router';
import { AuthDrawer } from '../auth-drawer/auth-drawer';



@Component({
  selector: 'app-home-page',
  imports: [NzCardModule, RouterLink, AuthDrawer, NzCardModule, NzIconDirective, NzGridModule, NzButtonModule, NzStatisticModule, NzBadgeModule, NzLayoutModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',

})
export class HomePage {

  viewDrawer: boolean = false

  open(): void {
    this.viewDrawer = true;
  }


}
