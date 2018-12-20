import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';

interface IItem {
  name: string;
  userID: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Auth Tingz App';
  // isLoggedIn: boolean;
  // user;

  items: Observable<IItem[]>;
  itemCollection: AngularFirestoreCollection<IItem>;
  
  constructor(
    private auth: AuthService, 
    private afs: AngularFirestore) {
    // this.user = this.auth.user;
    // this.isLoggedIn = this.auth.isLoggedIn;
    this.itemCollection = this.afs.collection<IItem>('items', 
      (ref) => {return ref.where('userID', '==', this.auth.user.uid).orderBy('name', 'desc')
    });
    this.items = this.itemCollection.valueChanges();
   }

  ngOnInit() {
  }

  logout () {
    this.auth.logout();
    console.log("Great logout success")
  }

}
