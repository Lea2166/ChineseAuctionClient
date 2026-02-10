import { Component, Input } from '@angular/core';
import { ReadCartDTO } from '../../../models/PackageOrderCart';

@Component({
  selector: 'app-get-cart-view',
  imports: [],
  templateUrl: './get-cart-view.html',
  styleUrl: './get-cart-view.scss',
})

export class GetCartView {
  @Input() cart: ReadCartDTO | null = null;

}
