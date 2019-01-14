import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { FormsModule } from "@angular/forms";
import { AuthGuard } from "./services/auth-guard.service";
import { RepoComponent } from './repo/repo.component';
import { ReposComponent } from './repos/repos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RepoComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'firebase-auth-tings'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, canActivate: [AuthGuard]},
      { path: "login", component: LoginComponent},
      { path: "register", component: RegisterComponent}
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
