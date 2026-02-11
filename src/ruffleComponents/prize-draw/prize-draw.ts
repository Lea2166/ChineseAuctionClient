import { Component, inject } from '@angular/core';
import { RuffleService } from '../../../services/ruffle-service';
import { UserService } from '../../../services/user';
@Component({
  selector: 'app-prize-draw',
  imports: [],
  templateUrl: './prize-draw.html',
  styleUrl: './prize-draw.scss',
})
export class PrizeDraw {
public ruffleService = inject(RuffleService);
public UserService = inject(UserService);
makeRuffle(id: number) {
  this.ruffleService.Ruffle(id,this.UserService.token()).subscribe({
    next: (response) => {
      console.log('Ruffle successful:', response);
    },
    error: (error) => {
      console.error('Error during ruffle:', error);
    }
  });
}
}
