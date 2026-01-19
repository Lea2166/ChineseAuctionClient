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
  imports: [NzButtonModule, NzModalModule, ReactiveFormsModule, NzFormModule, NzInputModule],
  templateUrl: './add-package.html',
  styleUrl: './add-package.scss',
})
export class AddPackage {
  public PackageService = inject(Packages);
  public packages: CreatePackageDTO[] = [];
  public UserService = inject(UserService);

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
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
      this.isVisible = false;
      this.packageForm.reset();
      console.log('Sending data to server:', packageData);
      this.PackageService.addPackage(packageData, this.UserService.token()).subscribe({
        next: () => {
          console.log("package added successfully");
          this.PackageService.getAllPackages().subscribe({
            next: packages => {
              this.PackageService.setAllPackages([...packages]);
              this.packages = [...packages];
            },
            error: (err: any) => {
              console.error('error fetch packages', err);
            }
          })
        },
        error: (err: any) => {
          console.error('Error creating package', err);
        }
      });
    } else {
      Object.values(this.packageForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          this.isVisible = false;
          this.packageForm.reset();
        }
      });
    }
  }
  ngOnInit() {
    this.PackageService.getAllPackages().subscribe({
      next: packages => {
        this.PackageService.setAllPackages([...packages])
        this.packages = packages;
      },
      error: (err: any) => {
        console.error('error fetch packages', err);
      }
    })
  }
}
