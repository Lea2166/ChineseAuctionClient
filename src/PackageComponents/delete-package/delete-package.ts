import { Component, inject, Input } from '@angular/core';
import { Packages } from '../../pages/packages/packages';
import { UserService } from '../../../services/user';
import { PackagesService } from '../../../services/packages';
import { PrizesService } from '../../../services/prizes';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { MessagesService } from '../../../services/messages';


@Component({
  selector: 'app-delete-package',
  imports: [NzIconModule,NzPopconfirmModule],
  templateUrl: './delete-package.html',
  styleUrl: './delete-package.scss',
})
export class DeletePackage {
  userService: UserService = inject(UserService)
  packagesService: PackagesService = inject(PackagesService);
  messageService = inject(MessagesService); 

  @Input() id: number | null | undefined = null

  delete() {

    if (!this.userService.token || this.userService.user()?.role !== 'Admin' || !this.id || this.id == 0) {
      console.log("You havn't premission to do this action");
      return;

    }
    
    this.packagesService.deletePackage(this.id, this.userService.token()).subscribe({
      next: () => {
        this.messageService.success("Package deleted successfully");
      },
      error: (err: any) => {
        console.error('error delete package', err);
        this.messageService.error('Error deleting package', err);
      }
    })

  }
}
