import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AuthDrawer } from '../pages/auth-drawer/auth-drawer';
import { ɵNzTransitionPatchDirective } from "ng-zorro-antd/core/transition-patch";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UserService } from '../../services/user';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzLayoutModule, NzMenuModule, AuthDrawer, ɵNzTransitionPatchDirective, NzIconModule,NzDropDownModule, NzIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  userService: UserService = inject(UserService);

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token || token === "") {
      console.log("please log in first");
      return
    }
    this.userService.me(token).subscribe({
      next: (user) => console.log("User loaded successfully", user),
      error: (err) => console.error("Failed to load user", err)
    });

  }

  viewMenu:boolean=false;
  viewDrawer: boolean = false

  open(): void {
    this.viewDrawer = true;
  }

  logout(){
    this.userService.logOut();
    this.viewMenu=false;
  }
}
