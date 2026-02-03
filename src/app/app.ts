import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AuthDrawer } from '../pages/auth-drawer/auth-drawer';
import { ɵNzTransitionPatchDirective } from "ng-zorro-antd/core/transition-patch";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UserService } from '../../services/user';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { MessagesService } from '../../services/messages';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzLayoutModule, NzMenuModule, AuthDrawer, ɵNzTransitionPatchDirective, NzIconModule, NzDropDownModule, NzIconModule, RouterLinkWithHref, RouterLinkActive, NzDrawerModule,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  userService: UserService = inject(UserService);
  messageService = inject(MessagesService);

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token || token === "") {
      console.log("No token found in localStorage");

      return;

    }
    this.userService.me(token).subscribe({
      next: (user) => {
        console.log("User loaded successfully", user)
        this.userService.setUser(user);

      },
      error: (err) => {
        console.error("Failed to load user", err)
        this.messageService.error("Error", "Failed to load user data. Please log in again.");
      }
    });

  }

  viewMenu: boolean = false;
  viewDrawer: boolean = false

  open(): void {
    this.viewDrawer = true;
  }

  logout() {
    this.userService.logOut();
    this.viewMenu = false;
    this.isMobileMenuVisible = false;
  }

  isMobileMenuVisible = false;

  toggleMobileMenu(): void {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }

  isAdmin(): boolean {
    const user = this.userService.user();
    return user?.role === 'Admin';
  }

}
