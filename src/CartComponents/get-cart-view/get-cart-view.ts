import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ReadCartDTO } from '../../../models/PackageOrderCart';
import { NzCardModule } from "ng-zorro-antd/card";
import { NzListModule } from "ng-zorro-antd/list";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CartActions } from "../cart-actions/cart-actions";
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MessagesService } from '../../../services/messages';

@Component({
  selector: 'app-get-cart-view',
  imports: [NzCardModule, NzListModule, NzButtonModule, NzTagModule, FormsModule, NzInputNumberModule, NzGridModule, CartActions],
  templateUrl: './get-cart-view.html',
  styleUrl: './get-cart-view.scss',
})

export class GetCartView {
  @Input() cart: ReadCartDTO | null = null;
  @Output() navigate = new EventEmitter<ReadCartDTO>();

  messageService=inject(MessagesService)

  get totalItems(): number {
    
    return this.cart?.cartItems.reduce((sum, i) => sum + i.quantity, 0) || 0;
  }

  nav(){
    if(this.totalItems==0){
      this.messageService.info("Your Cart is Empty",'')
    }
    this.navigate.emit()
  }






}
