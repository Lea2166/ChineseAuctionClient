import { Component, inject } from '@angular/core';
import { Packages } from '../../../services/packages';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CreatePackageDTO, ReadPackageDTO } from '../../../models/PackageOrderCart';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UserService } from '../../../services/user';
@Component({
  selector: 'app-gett-all-packages',
  imports: [NzCardModule, NzGridModule, NzIconModule],
  templateUrl: './gett-all-packages.html',
  styleUrl: './gett-all-packages.scss',
})
export class GettAllPackages {
  public packagesService = inject(Packages);
  public UserService = inject(UserService);

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
  deletePackage(id: number) {
    this.packagesService.deletePackage(id, this.UserService.token()).subscribe({
      next: () => {
        this.packagesService.setAllPackages([...this.packages])
        console.log("package deleted successfully");
      }
    });
  }
}

