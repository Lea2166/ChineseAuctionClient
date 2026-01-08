import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from '../../../services/user';
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
  styles: [
    `
      [nz-form] {
        max-width: 600px;
        margin: auto;
      }
      .register-area {
        margin-bottom: 8px;
      }
    `
  ]
})
export class Register implements OnInit, OnDestroy {
  private fb = inject(NonNullableFormBuilder);
  private destroy$ = new Subject<void>();
  private userService: UserService = inject(UserService);
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
    // עדכון תקינות סיסמה חוזרת בכל שינוי של הסיסמה הראשית
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
      
      console.log('נתונים מוכנים לשליחה ל-API:', submitData);
      this.userService.signIn(submitData as SignInDTO).subscribe({
      next: (response: any) => {
        console.log('ההרשמה הצליחה!', response);
      },
      error: (err: any) => {
        console.error('שגיאה בהרשמה:', err);
      }
    });
  } else {
      // סימון כל השדות כ-Dirty כדי להציג שגיאות במידה והטופס לא תקין
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


}