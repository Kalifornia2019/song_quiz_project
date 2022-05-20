import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

export class UserGuard implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
      const user =JSON.parse(localStorage.getItem('user') || '{}');
        for (let key in user) {
          return true;
        }
        return false;
    }
}
