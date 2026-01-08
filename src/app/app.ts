import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AuthDrawer } from '../pages/auth-drawer/auth-drawer';
import { ɵNzTransitionPatchDirective } from "ng-zorro-antd/core/transition-patch";
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzLayoutModule, NzMenuModule, AuthDrawer, ɵNzTransitionPatchDirective, NzIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

    viewDrawer:boolean=false
    open(): void {
    this.viewDrawer = true;
  }
}
