import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

  formControl = new FormControl(new Date());

  constructor(private route: ActivatedRoute,) {   
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.route = params[''];
    });
  }

}
