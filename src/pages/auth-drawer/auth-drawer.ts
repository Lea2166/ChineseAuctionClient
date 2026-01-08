import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { Login } from '../../AuthComponents/login/login';
import { Register } from '../../AuthComponents/register/register';
@Component({
  selector: 'app-auth-drawer',
  imports: [NzButtonModule, NzDrawerModule, NzTabsModule,Login,Register],
  templateUrl: './auth-drawer.html',
  styleUrl: './auth-drawer.scss',
})
export class AuthDrawer {
  visible = false;
    tabs = [1, 2];

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
