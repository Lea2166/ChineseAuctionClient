import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CreatePrizeDTO } from '../../../models/Prize';
import { AddPrizeView } from '../add-prize-view/add-prize-view';
import { PrizesService } from '../../../services/prizes';

@Component({
  selector: 'app-add-prize',
  imports: [NzButtonModule, NzDatePickerModule, NzDrawerModule, NzFormModule, NzInputModule, NzSelectModule,AddPrizeView],
  templateUrl: './add-prize.html',
  styleUrl: './add-prize.scss',
})
export class AddPrize {
public prizesService: PrizesService = inject(PrizesService);
handleCreatePrize(prizeToAdd: CreatePrizeDTO) {
  this.prizesService.setSimplePrize(prizeToAdd).subscribe({
    next: (savedPrize) => {
      console.log('Prize created successfully!');
    },
    error: (err: any) => {
      console.error('Error creating prize', err);
    }
  });
}
}
