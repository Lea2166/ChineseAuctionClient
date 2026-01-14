import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreatePrizeDTO } from '../../../models/Prize';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzUploadChangeParam, NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { Subject } from 'rxjs';
import { NzDividerModule } from "ng-zorro-antd/divider";


@Component({
  selector: 'app-add-prize-view',

  imports: [NzDrawerModule, NzFormModule, NzSelectModule, NzDatePickerModule, NzGridModule, NzInputModule, NzButtonModule, FormsModule, NzIconModule, NzUploadModule, NzModalModule, NzDividerModule],
  templateUrl: './add-prize-view.html',
  styleUrl: './add-prize-view.scss',
})
export class AddPrizeView {


  fileList: NzUploadFile[] = [];
  prizeData: CreatePrizeDTO = {
    name: '',
    qty: 1,
    donorId: 0,
    categoryId: 0,
    description: '',
    imagePath: ''
  };

  @Output() add = new EventEmitter<CreatePrizeDTO>();
  @Input() donors: { id: number; name: string }[] = [];
  @Input() categories: { id: number; name: string }[] = [];


  @Input() visible: boolean = false;
  @Output() requestClose = new EventEmitter<void>();


  close(): void {
    this.requestClose.emit()
  }

  private destroy$ = new Subject<void>();
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    this.add.emit(this.prizeData);
    this.close();
    this.resetForm();
  }

  private resetForm(): void {
    this.prizeData = {
      name: '',
      qty: 1,
      donorId: 0,
      categoryId: 0,
      description: '',
      imagePath: ''
    };
  }

  handleUploadChange(info: NzUploadChangeParam): void {
    if (info.file.status === 'done') {
      this.prizeData.imagePath = info.file.response.dbPath;
    }
  }

}
