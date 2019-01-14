import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ICat {
  _id: number;
  text: string;
}

export interface ICatAPI {
  all: ICat[];
}

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  private facts: Observable<ICatAPI[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.facts = this.http.get<ICatAPI[]>('https://cat-fact.herokuapp.com/facts');
  }

}
