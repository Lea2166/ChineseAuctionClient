import { Component } from '@angular/core';
import { GettAllPackages } from '../../PackageCateories/gett-all-packages/gett-all-packages';
import { AddPackage } from '../../PackageCateories/add-package/add-package';
@Component({
  selector: 'app-packages',
  imports: [GettAllPackages, AddPackage],
  templateUrl: './packages.html',
  styleUrl: './packages.scss',
})
export class Packages {

}
