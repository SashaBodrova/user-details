import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Person } from "../../types/person";
import { Observable } from "rxjs";
import { UserService } from "../user.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<Person>{

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Person | Observable<Person> | Promise<Person> {
    let id = route.params['id']

    return this.userService.getUser(id)
  }
}
