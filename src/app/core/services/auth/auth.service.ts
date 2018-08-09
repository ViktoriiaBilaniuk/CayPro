import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public fireAuth: AngularFireAuth,
    public fireDatabase: AngularFireDatabase) {
  }

  login(email, password) {
    this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    this.fireAuth.auth.signOut();
  }
}
