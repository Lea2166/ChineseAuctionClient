import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { OneOrderView } from '../one-order-view/one-order-view';
import { ReadOrderDTO } from '../../../models/PackageOrderCart';
import { SalesService } from '../../../services/sales';
import { UserService } from '../../../services/user';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MessagesService } from '../../../services/messages';

@Component({
  selector: 'app-one-order',
  imports: [OneOrderView, NzModalModule, NzButtonModule],
  templateUrl: './one-order.html',
  styleUrl: './one-order.scss',
})
export class OneOrder {
  @Input() id: number=0
  @Input() visible: boolean = false;
  @Output() requestClose = new EventEmitter<void>();

  salesService: SalesService = inject(SalesService)
  userService: UserService = inject(UserService)
  messageService = inject(MessagesService);

  ngOnInit() {

    if (this.id != 0) {
      this.salesService.getOrder(this.userService.token(), this.id).subscribe(
        {
          next: order => {
            this.salesService.setOrder(order)
            
          },
          error: (err: any) => {
            console.error(`error fetch prize with id ${this.id}`, err);
            this.messageService.error(`Error fetching order`, err);
          }
        }
      )
    }


  }

  close() {

    this.requestClose.emit()
  }


}

