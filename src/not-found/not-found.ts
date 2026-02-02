import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'app-not-found',
  imports: [NzResultModule, NzButtonModule, NzIconModule],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})

export class NotFound {
  private router = inject(Router);

  goHome(): void {
    this.router.navigate(['/']);
  }
}
