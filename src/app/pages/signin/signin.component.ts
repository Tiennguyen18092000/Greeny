import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public authService: AuthService,private router: ActivatedRoute,) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.router = params[''];
    });
  }

}
