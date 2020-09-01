import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    private toastrService: NbToastrService,
    private afAuth: AngularFireAuth,
    ) { }

  ngOnInit(): void {}

  showToast(status: NbComponentStatus, position) {
    this.toastrService.show(status, "Login successfully", {
      status,
      duration: 1000,
      position
    });
  }

  async loginWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    const credetial = await this.afAuth.signInWithPopup(provider);
    return this.authService
      .updateUserData(credetial.user)
      .then(() => {
        this.showToast("success", "bottom-end");
        this.router.navigate(['/playlist']);
      })
      .catch(err => console.log(err));
  }

}
