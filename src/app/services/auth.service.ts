import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register (email: string, password: string) {
    return this.aFAuth.auth
    .createUserWithEmailAndPassword(email, password)
    .catch((error: Error) => {
      console.error(error);
      throw error;
    });
  }

  get isLoggedIn(): boolean {
    return (this.user) ? true: false;
  }

  get user() {
    return this.aFAuth.auth.currentUser
  }

  login (email: string, password: string) {
    return this.aFAuth.auth
    .signInWithEmailAndPassword(email, password)
    .catch((error: Error) => {
      console.error(error);
      throw error;
    });
  }

  logout() {
    this.aFAuth.auth.signOut().then(() => {
      this.router.navigate(['login']);
    })
    .catch((error) => {
      console.error(error);
      throw error;
    })
  }

  // isLoggedIn(isLoggedIn: boolean) {
  //   return this.aFAuth.auth.onAuthStateChanged(isLoggedIn).
  // }

  constructor(private aFAuth: AngularFireAuth, private router: Router) { }
}
