import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { Subject } from 'rxjs';
import { DonorCreateDTO } from '../../../models/Donor';

@Component({
  selector: 'app-add-donor-view',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule, NzModalModule],
  templateUrl: './add-donor-view.html',
  styleUrl: './add-donor-view.scss',
})
export class AddDonorView {

  @Input() visible: boolean = false;
  @Output() requestClose = new EventEmitter<void>();
  @Output() requestSubmit=new EventEmitter<DonorCreateDTO>();

  private fb = inject(NonNullableFormBuilder);

  private destroy$ = new Subject<void>();

  loading: boolean = false;

  validateForm = this.fb.group({
    firstName: this.fb.control('', [Validators.maxLength(100), Validators.required]),
    lastName: this.fb.control('', [Validators.maxLength(100), Validators.required]),
    company: this.fb.control('', [Validators.maxLength(100)]),
    address: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    phoneNumber: this.fb.control('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(12)]),
  });


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('donor', this.validateForm.value);
      this.requestSubmit.emit(this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  close(): void {
    this.requestClose.emit()
  }
}
