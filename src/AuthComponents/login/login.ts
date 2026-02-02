import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { UserService } from '../../../services/user';
import { LogInDTO } from '../../../models/User';
import { finalize } from 'rxjs';
import { MessagesService } from '../../../services/messages';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  private fb = inject(NonNullableFormBuilder);
  private userService: UserService = inject(UserService);
  messageService = inject(MessagesService);

  loading: boolean = false;
  error: string | null = null;

  validateForm = this.fb.group({
    email: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
  });



  submitForm(): void {
    this.loading = true;
    if (this.validateForm.valid) {

      // console.log('submit', this.validateForm.value);
      this.userService
        .logIn(this.validateForm.value as LogInDTO)
        .pipe(finalize(() => this.loading = false))
        .subscribe({
          next: user => {
            this.userService.setUser(user)
            // console.log('login success', user);
          this.messageService.success('Welcome back ' + user.name + '!');
            
          },
          error: (err: any) => {
            console.error('error login', err);
            this.messageService.error('Login failed', err);
          }
        })
        this.validateForm.reset();
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
