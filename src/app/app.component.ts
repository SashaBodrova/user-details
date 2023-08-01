import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrgansService } from "./services/organs.service";
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OrgansService]
})
export class AppComponent implements OnInit, OnDestroy {
  name:string = 'Sasha'
  userAdded: boolean = false;
  userAddedSubscription: Subscription

  constructor(private authService: AuthService, private userService: UserService) {
    console.log("Constructor called")

    this.userAddedSubscription = this.userService.userAddedEvent.subscribe((data: boolean) => {
      this.userAdded = data
    })
  }

  ngOnInit() {
    console.log("NgOnInit called")
  }

  onLoginClick() {
    this.authService.login()
  }

  onLogoutClick() {
    this.authService.logout()
  }

  ngOnDestroy() {
    this.userAddedSubscription.unsubscribe()
  }
}
