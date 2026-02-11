import { Component, inject } from '@angular/core';
import { PackagesService } from '../../../services/packages';
import { CartService } from '../../../services/cart-service';
import { UserService } from '../../../services/user';

@Component({
  selector: 'app-choose-packages',
  imports: [],
  templateUrl: './choose-packages.html',
  styleUrl: './choose-packages.scss',
})
export class ChoosePackages {
  public packagesService = inject(PackagesService);
  public cartService = inject(CartService);
  public userService = inject(UserService);
  calculateSavings(pkg: any, ticketsNeeded: number, SINGLE_TICKET_PRICE: number): number {
    const costInSingles = pkg.quantity * SINGLE_TICKET_PRICE;

    const savings = costInSingles - pkg.price;

    return savings > 0 ? savings : 0;
  }
  suggestPackages() {
    const cart = this.cartService.cart();
    const allPackages = this.packagesService.packages();
    if (!cart || !allPackages) return [];
    const SINGLE_TICKET_PRICE = allPackages.find(pkg => pkg.numOfTickets === 1)?.price || 10;
    const totalTicketsInCart = cart.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    return allPackages
      .filter(pkg => pkg.numOfTickets <= totalTicketsInCart)
      .map(pkg => {
        const packageValueInSingles = pkg.numOfTickets * SINGLE_TICKET_PRICE;
        const savingsAmount = packageValueInSingles - pkg.price;
        const discountPercent = Math.round((savingsAmount / packageValueInSingles) * 100);
        const remainingTickets = totalTicketsInCart - pkg.numOfTickets;
        const finalPrice = pkg.price + (remainingTickets * SINGLE_TICKET_PRICE);
        return {
          ...pkg,
          savings: savingsAmount,
          discount: discountPercent,
          isRecommended: savingsAmount > 0,
          totalPriceWithRemnants: finalPrice
        };
      })
      .sort((a, b) => b.savings - a.savings);
  }
}