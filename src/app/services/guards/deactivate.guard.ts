import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs";

export interface IDeactivatedGuard {
  canExit: () => boolean | Promise<boolean> | Observable<boolean>
}

export const deactivateGuard: CanDeactivateFn<IDeactivatedGuard> = (component: IDeactivatedGuard, currentRoute: ActivatedRouteSnapshot, currentState:RouterStateSnapshot, nextState: RouterStateSnapshot, ) => {
  return component.canExit();
};
