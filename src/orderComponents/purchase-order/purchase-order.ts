import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../../services/order-service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-purchase-order',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './purchase-order.html',
  styleUrl: './purchase-order.scss',
})
export class PurchaseOrder {
  paymentForm: FormGroup;
  isLoading = false;
  statusMessage = '';

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
      this.statusMessage = 'Processing payment...';
      
      this.paymentService.processPayment(this.paymentForm.value).subscribe((res: any) => {
        this.isLoading = false;
        this.statusMessage = res.message;
        if (res.success) this.paymentForm.reset();
      });
    }
  }

}
