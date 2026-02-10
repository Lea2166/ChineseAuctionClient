import { Component, NgModule } from '@angular/core';
import { NzCardComponent } from "ng-zorro-antd/card";
import { NzListComponent, NzListModule } from "ng-zorro-antd/list";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";


@Component({
  selector: 'app-add-to-cart-view',
  imports: [ NzListModule, NzTagModule, NzInputNumberModule],
  templateUrl: './add-to-cart-view.html',
  styleUrl: './add-to-cart-view.scss',
})
export class AddToCartView {

}
