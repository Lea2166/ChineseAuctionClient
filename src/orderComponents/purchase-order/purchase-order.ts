import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../../services/order-service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzFormModule } from "ng-zorro-antd/form";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { MessagesService } from '../../../services/messages';

@Component({
  selector: 'app-purchase-order',
  imports: [ReactiveFormsModule, CommonModule, NzFormModule, NzButtonModule, NzGridModule, NzInputModule],
  templateUrl: './purchase-order.html',
  styleUrl: './purchase-order.scss',
})
export class PurchaseOrder {

  paymentForm: FormGroup;
  isLoading = false;
  messageService=inject(MessagesService)

  @Output() finish=new EventEmitter<void>()

  constructor(private fb: FormBuilder, private paymentService: OrderService) {
    this.paymentForm = this.fb.group({
      cardName: ['', [Validators.required, Validators.minLength(2)]],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiry: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/?([0-9]{2})$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]]
    });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      this.isLoading = true;
    

      this.paymentService.processPayment(this.paymentForm.value).subscribe((res: any) => {
        this.isLoading = false;
        
        if (res.success) {
          this.paymentForm.reset();
          this.messageService.success(res.message)
          this.finish.emit()
        }
        else{
          this.messageService.error(res.message,'')
        }
      });
      
    }
  }


 
}
