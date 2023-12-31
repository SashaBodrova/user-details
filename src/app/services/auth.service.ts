import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn:boolean = false

  constructor() { }

  login() {
    this.isLoggedIn = true
  }

  logout() {
    this.isLoggedIn = false
  }

  isAuthenticate() {
    return this.isLoggedIn
  }
}
