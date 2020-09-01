import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Users } from '../models/users.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public auth: AngularFireAuth, public router: Router, private db: AngularFirestore,) {
    this.checkUser();
  }


  user$: Observable<any>;

  checkUser() {
    this.user$ = this.auth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.doc<Users>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  public async logOut() {
    await this.auth.signOut();
    return this.router.navigate(['/']);
  }

  public updateUserData({ uid, email, displayName, photoURL }: Users) {
    const userRef: AngularFirestoreDocument<Users> = this.db.doc(`users/${uid}`);
    const data = {
      uid,
      email,
      displayName,
      photoURL
    };
    return userRef.set(data, { merge: true });
  }



  // async signOut() {
  //   await this.authService.logOut();
  //   location.reload();
  //   this.dialogRef.close();
  // }


}