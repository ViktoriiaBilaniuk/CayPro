import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';
import {AuthService} from '../services/auth/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import 'rxjs/add/operator/take';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/do';
import {isNullOrUndefined} from 'util';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, public fireAuth: AngularFireAuth) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.fireAuth.authState.map(auth => {
      if (isNullOrUndefined(auth)) {
        this.router.navigate(['/auth']);
        return false;
      } else {
        return true;
      }
    });
  }

}
