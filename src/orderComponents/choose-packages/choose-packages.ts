import { Component, inject } from '@angular/core';
import { PackagesService } from '../../../services/packages';
import { CartService } from '../../../services/cart-service';
import { UserService } from '../../../services/user';
import { NzBadgeModule } from "ng-zorro-antd/badge";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzStatisticModule } from "ng-zorro-antd/statistic";
import { NzTagModule } from "ng-zorro-antd/tag";
import { MessagesService } from '../../../services/messages';
import { ReadCartDTO, ReadPackageDTO } from '../../../models/PackageOrderCart';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

interface SuggestedPackage {
  totalPrice: number;
  composition: string;
  ticketsCount: number;
  savings: number;
}

@Component({
  selector: 'app-choose-packages',
  imports: [NzBadgeModule, NzCardModule, NzEmptyModule, NzButtonModule, NzGridModule, NzDividerModule, NzStatisticModule, NzTagModule],
  templateUrl: './choose-packages.html',
  styleUrl: './choose-packages.scss',
})
export class ChoosePackages {

  public packagesService = inject(PackagesService);
  public cartService = inject(CartService);
  public userService = inject(UserService);
  public messageService = inject(MessagesService)


  suggestedPks: any = []
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
      this.checkIfReady()
    } else {
      this.packagesService.getAllPackages().subscribe({
        next: (packages) => {
          this.packages = packages;
          this.packagesService.setAllPackages([...packages]);
          this.checkIfReady()
        }
      });
    }

    //get cart
    const cachedCart = this.cartService.cart()

    if (cachedCart) {
      this.cart = cachedCart
      this.checkIfReady()
    }
    else {
      this.cartService.GetCartByUserId(this.userService.token()).subscribe({
        next: cart => {
          this.cartService.setCart(cart);
          this.cart = cart
          this.checkIfReady()
        },
        error: (err: any) => {
          console.error('Error fetching cart', err);
          this.messageService.error('Error fetching cart', err);
        },

      });
    }
    this.checkIfReady()
  }

  checkIfReady() {

    if (this.packages.length > 0 && this.cart) {
      this.suggestPackages();
      return
    }


  }



  suggestPackages(): void {
    const totalTickets = this.cart?.cartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;

    if (!totalTickets || !this.packages?.length) return;

    const singlePrice = this.packages.find(p => p.numOfTickets === 1)?.price || 10;

    this.suggestedPks = this.packages
      .map(anchor => this.createSuggestion(anchor, totalTickets, singlePrice))
      .filter((pkg): pkg is SuggestedPackage => pkg !== null)
      .filter((v, i, a) => a.findIndex(t => t.totalPrice === v.totalPrice) === i)
      .sort((a, b) => a.totalPrice - b.totalPrice)
      .slice(0, 4);
  }

  private createSuggestion(anchor: ReadPackageDTO, total: number, singlePrice: number): SuggestedPackage | null {
    if (anchor.numOfTickets > total) return null;

    const { totalPrice, components } = this.getBestCombination(total - anchor.numOfTickets);
    const allParts = [anchor, ...components];
    const finalPrice = anchor.price + totalPrice;

    return {
      totalPrice: finalPrice,
      ticketsCount: total,
      composition: this.formatComposition(allParts),
      savings: (total * singlePrice) - finalPrice
    };
  }


  private getBestCombination(amount: number): { totalPrice: number, components: ReadPackageDTO[] } {
    const dp = new Array(amount + 1).fill(Infinity);
    const bestPkgAt = new Array(amount + 1).fill(null);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
      for (const pkg of this.packages) {
        if (i >= pkg.numOfTickets && dp[i - pkg.numOfTickets] + pkg.price < dp[i]) {
          dp[i] = dp[i - pkg.numOfTickets] + pkg.price;
          bestPkgAt[i] = pkg;
        }
      }
    }

    return {
      totalPrice: dp[amount],
      components: this.reconstructComponents(bestPkgAt, amount)
    };
  }

  private reconstructComponents(bestPkgAt: ReadPackageDTO[], amount: number): ReadPackageDTO[] {
    const components: ReadPackageDTO[] = [];
    while (amount > 0 && bestPkgAt[amount]) {
      const pkg = bestPkgAt[amount];
      components.push(pkg);
      amount -= pkg.numOfTickets;
    }
    return components;
  }


  private formatComposition(components: ReadPackageDTO[]): string {

    const names = components.map(p => `${p.name} Package`);

    return [...new Set(names)]
      .map(name => {
        const count = names.filter(n => n === name).length;
        return `${count} x ${name}`;
      })
      .join(' + ');
  }





  applySuggestion(option: any) {

  }
}