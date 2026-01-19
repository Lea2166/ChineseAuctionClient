import { Component } from '@angular/core';
import { NzContentComponent } from "ng-zorro-antd/layout";
import {  NzCardModule } from "ng-zorro-antd/card";
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-home-page',
  imports: [ NzCardModule, NzCardModule,NzGridModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
