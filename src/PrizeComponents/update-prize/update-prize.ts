import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from "@angular/core";
import { UserService } from "../../../services/user";
import { DonorsService } from "../../../services/donors";
import { CategoriesService } from "../../../services/categories";
import { PrizesService } from "../../../services/prizes";
import { DonorReadDTO } from "../../../models/Donor";
import { Category } from "../../../models/PackageOrderCart";
import { ReadPrizeDTO, UpdatePrizeDTO } from "../../../models/Prize";
import { NzUploadChangeParam, NzUploadFile, NzUploadModule } from "ng-zorro-antd/upload";
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";

@Component({
  selector: 'app-update-prize',
  imports: [NzInputModule, NzModalModule, ReactiveFormsModule, NzFormModule, NzSelectModule, NzUploadModule, NzButtonModule],
  templateUrl: './update-prize.html',
  styleUrl: './update-prize.scss',

})

export class UpdatePrize {

  @Input() prize: ReadPrizeDTO | null = null

  @Input() visible: boolean = false;
  @Output() requestClose = new EventEmitter<void>();

  public UserService = inject(UserService);
  public donorsService = inject(DonorsService);
  public prizesService: PrizesService = inject(PrizesService);
  public CategoriesService = inject(CategoriesService);
  public donors: DonorReadDTO[] = [];
  public categories: Category[] = [];

  ngOnInit() {


    const cachedDonors = this.donorsService.donors();
    if (cachedDonors && cachedDonors.length > 0) {
      this.donors = cachedDonors;
    } else {
      this.donorsService.getAlldonors(this.UserService.token()).subscribe(donors => {
        this.donors = donors;
        this.donorsService.setDonors(donors);
      });
    }

    const cachedCategories = this.CategoriesService.categories();
    if (cachedCategories && cachedCategories.length > 0) {
      this.categories = cachedCategories;
    } else {
      this.CategoriesService.getAllCategories().subscribe(categories => {
        this.categories = categories;
        this.CategoriesService.setCategories(categories);
      });
    }


  }

  fileList: NzUploadFile[] = [];

  private fb = inject(NonNullableFormBuilder);

  prizeData: FormGroup = this.fb.group({
    id: [null],
    name: ['', Validators.required],
    qty: [1, [Validators.min(1)]],
    donorId: [null],
    categoryId: [null],
    description: [''],
    imagePath: ['']
  });

  ngOnChanges(changes: SimpleChanges): void {

    if (
      changes['visible'] &&
      this.visible &&
      this.prize
    ) {
      this.prizeData.reset();
      this.prizeData.patchValue({
        id: this.prize.id,
        name: this.prize.name,
        description: this.prize.description,
        qty: this.prize.qty,
        donorId: this.prize.donor?.id,
        categoryId: this.prize.category?.id,
        imagePath: this.prize.imagePath
      });
    }
  }


  submitForm(): void {

    if (this.prizeData.valid) {
      this.prizesService.updatePrize(this.prizeData.value as UpdatePrizeDTO, this.UserService.token()).subscribe({
        next: () => {
          console.log("prize updated successfully");
          this.prizesService.getAllPrizes().subscribe({
            next: prizes => {
              this.prizesService.setAllPrizes([...prizes]);
              this.prizeData.reset();
              this.close()
            },
            error: (err: any) => {
              console.error('error fetch donors', err);
            }
          })

        },
        error: (err: any) => {
          console.error('Error updating prize', err);
        }
      });


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

  handleUploadChange(info: NzUploadChangeParam): void {
    if (info.file.status === 'done') {
      this.prizeData.patchValue({ imagePath: info.file.response.dbPath });
    }
  }


  close() {
    this.prizeData.reset()
    this.fileList = [];
    this.requestClose.emit()
  }



}
