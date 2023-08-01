import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userAddedEvent = new Subject<boolean>()

  getUser(id: number) {
    if(id === 1) {
      return {
        id: 1,
        name: 'Leela'
      }
    }
    return {
      id: 1,
      name: 'Pupa'
    }
  }

  addUser() {
    this.userAddedEvent.next(true)
  }
}
