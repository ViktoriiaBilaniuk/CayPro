import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromPromise';
import {first, tap} from 'rxjs/internal/operators';
import {AngularFirestore} from 'angularfire2/firestore';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {isNullOrUndefined} from "util";


interface User {
  uid: string;
  email: string;
  photoURL: string;
  catchPhrase?: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  loggedUser;
  userLogged = false;
  user: Observable<User>;

  constructor(
    public fireAuth: AngularFireAuth,
    private afs: AngularFirestore) {
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
    return this.fireAuth.authState.map(auth => {
      console.log(auth);
      if (isNullOrUndefined(auth)) {
        return {
          state: false
        };
      } else {
        return {
          user: auth,
          state: false
        };
      }
    });
  }

  get currentUser() {
    return this.fireAuth.authState.map(auth => {
      console.log(auth);
      if (isNullOrUndefined(auth)) {
        return auth;
      } else {
        return null;
      }
    });
  }


  logout() {
    this.fireAuth.auth.signOut()
      .then(data => {
        console.log(data);
      });
  }
}
