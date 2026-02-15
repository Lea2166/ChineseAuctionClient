import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { ReadCartDTO, ReadPackageDTO } from '../../../models/PackageOrderCart';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTagModule } from 'ng-zorro-antd/tag';


interface SuggestedPackage {
  totalPrice: number;
  composition: string;
  ticketsCount: number;
  savings: number;
  components: number[]
}


@Component({
  selector: 'app-choose-packages-view',
  imports: [NzBadgeModule, NzCardModule, NzEmptyModule, NzButtonModule, NzGridModule, NzDividerModule, NzStatisticModule, NzTagModule],
  templateUrl: './choose-packages-view.html',
  styleUrl: './choose-packages-view.scss',
})
export class ChoosePackagesView {

  suggestedPks: any = []

  @Input() packages: ReadPackageDTO[] = []
  @Input() cart: ReadCartDTO | null = null

  selectedPkgs: number[] | [] = []
  @Output() choosePkgs = new EventEmitter<number[] | []>()
  disabled:boolean=false

  ngOnInit() {
    this.suggestPackages()
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

    console.log(this.suggestedPks);

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
      savings: (total * singlePrice) - finalPrice,
      components: [anchor.id, ...components.map(pkg => pkg.id)]
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


  applySuggestion(pkgs:number[]) {
    this.disabled=true
    this.choosePkgs.emit(pkgs)
  }

}
