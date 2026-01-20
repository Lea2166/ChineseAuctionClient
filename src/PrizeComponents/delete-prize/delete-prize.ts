import { Component, inject, Input } from '@angular/core';
import { UserService } from '../../../services/user';
import { PrizesService } from '../../../services/prizes';
import { Token } from '@angular/compiler';
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@Component({
  selector: 'app-delete-prize',
  imports: [NzButtonModule,NzIconModule,NzPopconfirmModule],
  templateUrl: './delete-prize.html',
  styleUrl: './delete-prize.scss',
})
export class DeletePrize {

  userService: UserService = inject(UserService)
  prizeService: PrizesService = inject(PrizesService);

  @Input() id: number | null | undefined = null

  delete() {

    if (!this.userService.token || this.userService.user()?.role !== 'Admin' || !this.id || this.id == 0) {
      console.log("You havn't premission to do this action");
      return;

    }
    this.prizeService.deletePrize(this.id, this.userService.token()).subscribe({
      error: (err: any) => {
        console.error('error delete prize', err);
      }
    })

  }

}
function next(arg0: (prizes: any) => any): Partial<import("rxjs").Observer<number>> | ((value: number) => void) | undefined {
  throw new Error('Function not implemented.');
}

