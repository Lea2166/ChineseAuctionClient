import { Component, inject } from '@angular/core';
import { PackagesService } from '../../../services/packages';
import { CartService } from '../../../services/cart-service';
import { UserService } from '../../../services/user';
import { MessagesService } from '../../../services/messages';
import { ReadCartDTO, ReadPackageDTO } from '../../../models/PackageOrderCart';
import { ChoosePackagesView } from "../choose-packages-view/choose-packages-view";
import { NzSpinModule } from "ng-zorro-antd/spin";
import { OrderService } from '../../../services/order-service';



@Component({
  selector: 'app-choose-packages',
  imports: [ChoosePackagesView, NzSpinModule],
  templateUrl: './choose-packages.html',
  styleUrl: './choose-packages.scss',
})

export class ChoosePackages {

  public packagesService = inject(PackagesService);
  public cartService = inject(CartService);
  public userService = inject(UserService);
  public messageService = inject(MessagesService)
  public orderService = inject(OrderService)


  packages: ReadPackageDTO[] = []
  cart: ReadCartDTO | null = null


  ngOnInit() {
    this.fetchData()
  }

  fetchData() {

    //get packages
    const cachedPackages = this.packagesService.packages();

    if (cachedPackages && cachedPackages.length > 0) {
      this.packages = cachedPackages;

    } else {
      this.packagesService.getAllPackages().subscribe({
        next: (packages) => {
          this.packages = packages;
          this.packagesService.setAllPackages([...packages]);

        }
      });
    }

    //get cart
    const cachedCart = this.cartService.cart()

    if (cachedCart) {
      this.cart = cachedCart

    }
    else {
      this.cartService.GetCartByUserId(this.userService.token()).subscribe({
        next: cart => {
          this.cartService.setCart(cart);
          this.cart = cart

        },
        error: (err: any) => {
          console.error('Error fetching cart', err);
          this.messageService.error('Error fetching cart', err);
        },

      });
    }

  }

  checkIfReady() {

    if (this.packages.length > 0 && this.cart) {
      return true
    }
    return false

  }

  applySuggestion(pkgs: number[] | []) {
    if (pkgs.length > 0) {
      this.orderService.setPackages(pkgs)
      
      
    }
    else {
      this.messageService.error("Order Error", "You have to choose at least one package")
    }

  }
}