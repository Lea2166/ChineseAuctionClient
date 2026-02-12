import { Component, inject, Input } from '@angular/core';
import { RuffleService } from '../../../services/ruffle-service';
import { UserService } from '../../../services/user';
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { MessagesService } from '../../../services/messages';
import { PrizesService } from '../../../services/prizes';
@Component({
  selector: 'app-prize-draw',
  imports: [NzButtonModule, NzIconModule, NzTooltipModule],
  templateUrl: './prize-draw.html',
  styleUrl: './prize-draw.scss',
})
export class PrizeDraw {

  public ruffleService = inject(RuffleService);
  public UserService = inject(UserService);
  public prizesService = inject(PrizesService)
  public messageService = inject(MessagesService)

  @Input() id: number = 0;
  @Input() disabled: boolean = true


  performRuffle() {
    this.ruffleService.Ruffle(this.id, this.UserService.token()).subscribe({
      next: (winner) => {
        console.log('Ruffle successful:', winner);
        this.messageService.success(`WINNER! ${winner.user?.name} won the ${winner.prize?.name}!`)

        this.prizesService.getAllPrizes({}).subscribe({
          next: prizes => {
            this.prizesService.setAllPrizes([...prizes])
            console.log(prizes);

          },
          error: (err: any) => {
            this.messageService.error('Error fetching prizes', err);
            console.error('error fetch prizes', err);

          }
        })

      },
      error: (error) => {
        console.error('Error during ruffle:', error);
        this.messageService.error("Ruffle Performance Failed", error)
      }
    });
  }


}
