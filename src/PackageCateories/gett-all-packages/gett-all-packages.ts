import { Component, inject } from '@angular/core';
import { Packages } from '../../../services/packages';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ReadPackageDTO } from '../../../models/PackageOrderCart';
@Component({
  selector: 'app-gett-all-packages',
  imports: [NzCardModule, NzGridModule],
  templateUrl: './gett-all-packages.html',
  styleUrl: './gett-all-packages.scss',
})
export class GettAllPackages {
  public packagesService = inject(Packages);
  public packages: ReadPackageDTO[] | [] = [];
  ngOnInit() {
    this.packagesService.getAllPackages().subscribe({
      next: packages => {
        this.packagesService.setAllPackages([...packages])
        this.packages = packages;
      },
      error: (err: any) => {
        console.error('error fetch packages', err);
      }
    })
  }
}

