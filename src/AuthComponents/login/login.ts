import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule, NzSpinComponent } from 'ng-zorro-antd/spin';
import { NzInputModule } from 'ng-zorro-antd/input';
import { UserService } from '../../../services/user';
import { LogInDTO } from '../../../models/User';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  private fb = inject(NonNullableFormBuilder);
  private userService: UserService = inject(UserService);

  loading: boolean = false;
  error: string | null = null;

  validateForm = this.fb.group({
    email: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
  });



  submitForm(): void {
    this.loading = true;
    if (this.validateForm.valid) {

      console.log('submit', this.validateForm.value);
      this.userService
        .logIn(this.validateForm.value as LogInDTO)
        .pipe(finalize(() => this.loading = false))
        .subscribe({
          next: user => {
            this.userService.setUser(user)
            console.log('login success', user);
            console.log('token',this.userService.token())
          },
          error: (err: any) => {

            console.error('error login', err);
          }
        })
    }
    else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      })
    }


  }
}
