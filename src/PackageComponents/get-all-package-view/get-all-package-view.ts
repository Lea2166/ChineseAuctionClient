import { Component, inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { CreatePackageDTO, ReadPackageDTO } from '../../../models/PackageOrderCart';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DeletePackage } from '../delete-package/delete-package';
import { NzIconModule as IconModule } from "ng-zorro-antd/icon";
import { UserService } from '../../../services/user';
import { PackagesService } from '../../../services/packages';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
@Component({
  selector: 'app-get-all-package-view',
  imports: [NzCardModule, NzGridModule, NzInputModule,NzIconModule, NzFormModule, NzIconModule, NzInputNumberModule, ReactiveFormsModule, NzButtonModule, DeletePackage, IconModule],
  templateUrl: './get-all-package-view.html',
  styleUrl: './get-all-package-view.scss',
})
export class GetAllPackageView {

  formatterDollar = (value: number | string): string => (value ? `$ ${value}` : '$ ');
  parserDollar = (value: string): number => Number(value.replace(/\$\s?|(,*)/g, ''));
  @ViewChild('editTemplate') editTemplate!: TemplateRef<any>;
  public editForm!: FormGroup;
  private modal = inject(NzModalService);
  private fb = inject(FormBuilder);
  public packagesService: PackagesService = inject(PackagesService);
  public UserService = inject(UserService);
  @Input() packages: ReadPackageDTO[] = [];
  @Input() isAdmin:boolean=false

  constructor() {
    this.initForm();
  }

  ngOnInit(): void {
    this.loadPackages();
  }

  private initForm() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      numOfTickets: [0, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  loadPackages() {
    this.packagesService.getAllPackages().subscribe({
      next: (res) => this.packages = res
    });
  }

  editPackage(pkg: ReadPackageDTO) {
    this.editForm.patchValue({
      name: pkg.name,
      numOfTickets: pkg.numOfTickets,
      price: pkg.price
    });

    this.modal.confirm({
      nzTitle: 'Edit Package',
      nzContent: this.editTemplate,
      nzIconType: undefined,
      nzOnOk: () => {
        if (this.editForm.valid) {
          const updateData = { ...this.editForm.value, id: pkg.id };
          this.updatePackage(pkg.id, updateData);
        }
      }
    });
  }

  updatePackage(id: number, data: CreatePackageDTO) {
    this.packagesService.updatePackage(id, data, this.UserService.token()).subscribe(() => {
      this.loadPackages();
    });
  }
}

