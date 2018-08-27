import { CanActivate, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';
import {AuthService} from '../services/auth/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, public fireAuth: AngularFireAuth) {}


  canActivate() {
    if (this.authService.loggedUser) {
      return true;
    }
    return false;
  }

}
