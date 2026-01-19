import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzUploadChangeParam, NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { ReadPrizeDTO, UpdatePrizeDTO } from '../../../models/Prize';
import { DonorReadDTO } from '../../../models/Donor';
import { Category } from '../../../models/PackageOrderCart';
import { Subject } from 'rxjs';
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';


@Component({
  selector: 'app-update-prize-view',
  imports: [NzModalModule, NzFormModule, NzSelectModule, NzUploadModule, NzGridModule, ReactiveFormsModule, NzInputModule],
  templateUrl: './update-prize-view.html',
  styleUrl: './update-prize-view.scss',
})
export class UpdatePrizeView {
  @Input() visible: boolean = false;

  @Input() prize: ReadPrizeDTO | null = null
  @Input() donors: DonorReadDTO[] = [];
  @Input() categories: Category[] = [];

  @Output() add = new EventEmitter<UpdatePrizeDTO>();
  @Output() requestClose = new EventEmitter<void>();


  fileList: NzUploadFile[] = [];

  private fb = inject(NonNullableFormBuilder);

  prizeData = this.fb.group({
    id: this.fb.control(this.prize?.id),
    name: this.fb.control(this.prize?.name),
    qty: this.fb.control(this.prize?.qty, [Validators.min(1)]),
    donorId: this.fb.control(this.prize?.donor?.Id),
    categoryId: this.fb.control(this.prize?.category?.id),
    description: this.fb.control(this.prize?.description),
    imagePath: this.fb.control(this.prize?.imagePath),
  });

  close(): void {
    this.requestClose.emit()
  }

  private destroy$ = new Subject<void>();
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    console.log("submited");
    console.log(this.prizeData.value);

    if (this.prizeData.valid) {
      this.add.emit(this.prizeData.value as UpdatePrizeDTO);
      this.close();
      this.resetForm();
    }
    else
      Object.values(this.prizeData.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
        console.log(control);

      })
  }
  private resetForm(): void {
    this.prizeData = this.fb.group({
      id: this.fb.control(this.prize?.id),
      name: this.fb.control(this.prize?.name),
      qty: this.fb.control(this.prize?.qty, [Validators.min(1)]),
      donorId: this.fb.control(this.prize?.donor?.Id),
      categoryId: this.fb.control(this.prize?.category?.id),
      description: this.fb.control(this.prize?.description),
      imagePath: this.fb.control(this.prize?.imagePath),
    });
    this.fileList = [];
  }

  handleUploadChange(info: NzUploadChangeParam): void {
    if (info.file.status === 'done') {
      this.prizeData.patchValue({ imagePath: info.file.response.dbPath });
    }
  }
}
