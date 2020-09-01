import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {Users} from '../models/users.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public user:firebase.User=null;
      constructor(public auth:AngularFireAuth, public router:Router) {
       
       }
       public async login(){
         
          let provide = new firebase.auth.GoogleAuthProvider;
          await this.auth.signInWithPopup(provide);
          this.user=await this.auth.currentUser;
          this.router.navigate(['playlist']);
      }
      public async logout(){
        await this.auth.signOut;
        this.user=null;
      }
    }