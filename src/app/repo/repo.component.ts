import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICat, ICatAPI } from "../repos/repos.component";
import { Observable } from 'rxjs';
import { catchError, switchMap } from "rxjs/operators";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  private fact: Observable<ICat>;
  private error = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fact = this.route.params 
    .pipe(switchMap((params) => {
      const id = params['id'];
      return this.http.get<ICat>('https://cat-fact.herokuapp.com/facts/' + id)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.error = true;
          return new Observable<ICat>();
        })
      )
    }))
  }

}


// const id = "599f89639a11040c4a163440"
// this.fact = this.http.get<ICat>('https://cat-fact.herokuapp.com/facts/' + id)
// .pipe(
//   catchError((err: HttpErrorResponse) => {
//     this.error = true;
//     return new Observable<ICat>();
//   })
// )
