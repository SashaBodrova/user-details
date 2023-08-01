import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean | Promise<boolean> | Observable<boolean> => {
  const authService = inject(AuthService)
  const router = inject(Router)

  let isLogged = authService.isAuthenticate()

  if(isLogged) {
    return true
  } else {
    router.navigate(['not-found'])
  }

  return true;
};

// export const canActivateChild: CanActivateChildFn =
//   (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//     return inject(AuthService).canActivate(inject(UserToken), route.params.id);
//   };

