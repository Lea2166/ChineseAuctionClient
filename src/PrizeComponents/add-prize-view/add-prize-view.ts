import { Component, EventEmitter, input, Output, OnInit, Input, inject, signal } from '@angular/core';
import { CreatePrizeDTO } from '../../../models/Prize';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzUploadChangeParam, NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { Observable, Subject } from 'rxjs';
import { NzDividerModule } from "ng-zorro-antd/divider";
import { DonorReadDTO } from '../../../models/Donor';
import { ReactiveFormsModule } from '@angular/forms';
import { NonNullAssert } from '@angular/compiler';
import { Category } from '../../../models/PackageOrderCart';
import { AsyncPipe } from '@angular/common';
import { MessagesService } from '../../../services/messages';

@Component({
  selector: 'app-add-prize-view',

  imports: [NzDrawerModule, NzFormModule, NzButtonModule, ReactiveFormsModule, NzSelectModule, NzDatePickerModule, NzGridModule, NzInputModule, NzButtonModule, FormsModule, NzIconModule, NzUploadModule, NzModalModule, NzDividerModule],
  templateUrl: './add-prize-view.html',
  styleUrl: './add-prize-view.scss',
})

export class AddPrizeView {

  private fb = inject(NonNullableFormBuilder);
  private messageService = inject(MessagesService);

  fileList: NzUploadFile[] = [];

  prizeData = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    qty: this.fb.control(1, [Validators.required, Validators.min(1)]),
    donorId: this.fb.control(0, [Validators.required]),
    categoryIds: this.fb.control([1]),
    description: this.fb.control('', [Validators.required]),
    imagePath: this.fb.control('', [Validators.required]),
  });

  @Output() add = new EventEmitter<CreatePrizeDTO>();
  @Input() donors: DonorReadDTO[] = [];
  @Input() categories: Category[] = [];
  @Input() visible: boolean = false;
  @Output() requestClose = new EventEmitter<void>();


  close(): void {
    this.prizeData.reset()
    this.requestClose.emit()

  }


  submitForm(): void {

    if (this.prizeData.valid) {
      this.add.emit(this.prizeData.value as CreatePrizeDTO);
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
      name: this.fb.control('', [Validators.required]),
      qty: this.fb.control(1, [Validators.required, Validators.min(1)]),
      donorId: this.fb.control(0, [Validators.required]),
      categoryIds: this.fb.control([1]),
      description: this.fb.control('', [Validators.required]),
      imagePath: this.fb.control(''),
    });

    this.fileList = [];
  }


  handleUploadChange(info: NzUploadChangeParam): void {
    if (info.file.status === 'removed') {
      this.prizeData.controls.imagePath.setValue('');
      this.prizeData.controls.imagePath.setErrors(null);
    }
    else if(info.file.status === 'error') {

      this.prizeData.controls.imagePath.setValue('');
      this.prizeData.controls.imagePath.setErrors({ uploadFailed: true });
      this.messageService.error('Image upload failed' , info.file.response?.message || 'Unknown error');

    }
    else if (info.file.status === 'done') {
      this.prizeData.patchValue({ imagePath: info.file.response.dbPath });
    }
  }


  beforeUpload = (file: NzUploadFile): boolean => {
  const isLt500Kb = file.size! / 1024 < 500;

  console.log(file.size, isLt500Kb);
  if (!isLt500Kb) {
    this.messageService.error('Image upload failed','Image must be smaller than 500KB');
    return false; 
  }

  return true;
};


  
}
