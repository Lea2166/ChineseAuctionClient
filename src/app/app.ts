import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AuthDrawer } from '../pages/auth-drawer/auth-drawer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzLayoutModule, NzMenuModule,AuthDrawer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
