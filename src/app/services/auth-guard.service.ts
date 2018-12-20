import { AngularFireAuth } from "@angular/fire/auth";
import { CanActivate, Router } from "@angular/router";
import { first, map } from "rxjs/operators";

import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()

export class AuthGuard implements CanActivate {

  constructor( 
    private firebaseAuth: AngularFireAuth,
    private router: Router) { }

  public canActivate(): Observable<boolean> {
    return this.firebaseAuth.authState.pipe(
      map(
        (user) => {
            if (user) {
              return true;
            } else {
              this.router.navigate(['/login']);
              return false;
            }
          },
        ),
        first(),
      )
    };
  }