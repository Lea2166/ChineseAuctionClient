import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzLayoutModule, NzMenuModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
