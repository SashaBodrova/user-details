import { Component } from '@angular/core';
import { Person } from "../../../../types/person";
import { UserService } from "../../../../services/user.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  constructor(private userService: UserService) {
  }

  users: Person[] = [
    {id: 1, name: 'Paul'},
    {id: 2, name: 'Natasha'},
    {id: 3, name: 'Leela'}
  ]

  onUserClick() {
    this.userService.addUser()
  }
}
