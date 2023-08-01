import { Component, Input } from '@angular/core';
import { Person } from "../../../../types/person";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  userDetails: boolean = false
  @Input() user: Person | undefined

  constructor() {}

  onUserDetailsClick() {
    return this.userDetails = !this.userDetails
  }
}
