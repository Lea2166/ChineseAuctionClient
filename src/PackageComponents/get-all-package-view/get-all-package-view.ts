import { Component, Input } from '@angular/core';
import { ReadPackageDTO } from '../../../models/PackageOrderCart';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DeletePackage } from '../delete-package/delete-package';

@Component({
  selector: 'app-get-all-package-view',
  imports: [ NzCardModule, NzGridModule, NzIconModule,NzButtonModule,DeletePackage ],
  templateUrl: './get-all-package-view.html',
  styleUrl: './get-all-package-view.scss',
})
export class GetAllPackageView {

  @Input() packages: ReadPackageDTO[] = [];
}

