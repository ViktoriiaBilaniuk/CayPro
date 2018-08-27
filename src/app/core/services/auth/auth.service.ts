import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromPromise';
import {first, tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser;
  userLogged = false;

  constructor(
    public fireAuth: AngularFireAuth,
    public fireDatabase: AngularFireDatabase) {
  }

  login(email, password) {
    return Observable.fromPromise(this.fireAuth.auth.signInWithEmailAndPassword(email, password));
  }

  signUp(email, password) {
    return Observable.fromPromise(this.fireAuth.auth.createUserWithEmailAndPassword(email, password));
  }

  isUser() {
    return this.userLogged;
  }

  isLoggedIn() {
    this.fireAuth.authState.pipe(first()).pipe(
      tap(user => {
        if (user) {
          console.log(user);
          return true;
        } else {
          return false;
        }
      })
    )
      .subscribe();
  }

  get authenticated() {
    this.fireAuth.authState.subscribe(res => {
      console.log(res);
      if (res && res.uid) {
        console.log('user is logged in');
        return true;
      } else {
        console.log('user not logged in');
        return false;
      }
    });
  }

  logout() {
    this.fireAuth.auth.signOut();
  }
}
