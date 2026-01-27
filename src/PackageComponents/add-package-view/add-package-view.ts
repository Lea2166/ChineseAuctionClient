import { Component, EventEmitter, inject, Output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-add-package-view',
  imports: [NzFormModule, NzInputModule, NzButtonModule, ReactiveFormsModule],
  templateUrl: './add-package-view.html',
  styleUrl: './add-package-view.scss',
})
export class AddPackageView {

  @Output() submitEvent = new EventEmitter();


  private fb = inject(NonNullableFormBuilder);

  packageForm = this.fb.group({
    name: ['', [Validators.required]],
    numOfTickets: [1, [Validators.required, Validators.min(1)]],
    price: [0, [Validators.required, Validators.min(0)]]
  });


  submitForm(): void {
    if (this.packageForm.valid) {
      this.submitEvent.emit(this.packageForm.value);
      this.packageForm.reset();

    } else {
      Object.values(this.packageForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }

  }
}
