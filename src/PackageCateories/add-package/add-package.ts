import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CreatePackageDTO } from '../../../models/PackageOrderCart';
import { Packages } from '../../../services/packages';
import { UserService } from '../../../services/user';
@Component({
  selector: 'app-add-package',
  imports: [NzButtonModule, NzModalModule,ReactiveFormsModule,NzFormModule, NzInputModule],
  templateUrl: './add-package.html',
  styleUrl: './add-package.scss',
})
export class AddPackage {
    public PackageService = inject(Packages);
    public pacages: CreatePackageDTO[] = [];
    public UserService = inject(UserService);
  
  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  private fb = inject(NonNullableFormBuilder);
packageForm = this.fb.group({
    name: ['', [Validators.required]],
    numOfTickets: [1, [Validators.required, Validators.min(1)]],
    price: [0, [Validators.required, Validators.min(0)]]
  });

  submitForm(): void {
    if (this.packageForm.valid) {
      const packageData: CreatePackageDTO = this.packageForm.getRawValue();
      console.log('Sending data to server:', packageData);
      this.PackageService.addPackage(packageData,this.UserService.token()).subscribe({
        next: () => {
          console.log('Package created successfully:', packageData);
    }})}else {

      Object.values(this.packageForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    
}
}
