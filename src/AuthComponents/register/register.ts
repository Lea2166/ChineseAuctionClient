import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../services/user'
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SignInDTO } from '../../../models/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule, NzSelectModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',

})
export class Register implements OnInit, OnDestroy {
  private fb = inject(NonNullableFormBuilder);
  private destroy$ = new Subject<void>();
  private userService: UserService = inject(UserService);
  loading: boolean = false;

  confirmationValidator = (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return null;
  };
  validateForm = this.fb.group({
    firstName: this.fb.control('', [Validators.required, Validators.maxLength(100)]),
    lastName: this.fb.control('', [Validators.required, Validators.maxLength(100)]),
    email: this.fb.control('', [Validators.email, Validators.required]),
    password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
    checkPassword: this.fb.control('', [Validators.required, this.confirmationValidator]),
    phoneNumber: this.fb.control('', [Validators.required, Validators.pattern('^[0-9]*$')])
  });

  ngOnInit(): void {

    this.validateForm.controls.password.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.validateForm.controls.checkPassword.updateValueAndValidity();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const { checkPassword, ...submitData } = this.validateForm.getRawValue();
      console.log('Data is ready to post API', submitData);


      this.loading = true;
      this.userService.signIn(submitData as SignInDTO)
        .pipe(finalize(() => this.loading = false))
        .subscribe({
          next: (response: any) => {
            console.log('Registeration succeed', response);
          },
          error: (err: any) => {
            console.error('Registeration failed:', err);
          }
        });
    } else {

      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


}