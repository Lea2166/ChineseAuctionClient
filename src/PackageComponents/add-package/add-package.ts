import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CreatePackageDTO } from '../../../models/PackageOrderCart';
import { PackagesService } from '../../../services/packages';
import { UserService } from '../../../services/user';
import { AddPackageView } from "../add-package-view/add-package-view";
import { MessagesService } from '../../../services/messages';
@Component({
  selector: 'app-add-package',
  imports: [NzButtonModule, NzModalModule, ReactiveFormsModule, NzFormModule, NzInputModule, AddPackageView],
  templateUrl: './add-package.html',
  styleUrl: './add-package.scss',
})
export class AddPackage {

  PackageService: PackagesService = inject(PackagesService);
  packages: CreatePackageDTO[] = [];
  UserService = inject(UserService);
  messageService = inject(MessagesService);


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

  submitForm(packageData: CreatePackageDTO): void {


    this.PackageService.addPackage(packageData, this.UserService.token()).subscribe({
      next: () => {
        console.log("package added successfully");
        this.PackageService.getAllPackages().subscribe({
          next: packages => {
            this.PackageService.setAllPackages([...packages]);
            this.packages = [...packages];
            this.isVisible = false;
            this.messageService.success("Package added successfully");
          },
          error: (err: any) => {
            console.error('error fetch packages', err);
            this.messageService.error('Error fetching packages', err);
          }
        })
      },
      error: (err: any) => {
        console.error('Error creating package', err);
        this.messageService.error('Error creating package', err);
      }
    });
  }
}


