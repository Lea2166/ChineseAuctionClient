import { Component, inject } from '@angular/core';
import { AddPackage } from '../../PackageComponents/add-package/add-package';
import { GettAllPackages } from '../../PackageComponents/gett-all-packages/gett-all-packages';
import { UserService } from '../../../services/user';

@Component({
  selector: 'app-packages',
  imports: [AddPackage,GettAllPackages],
  templateUrl: './packages.html',
  styleUrl: './packages.scss',
})
export class Packages {

  userService = inject(UserService);
}
