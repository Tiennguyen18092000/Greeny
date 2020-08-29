import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
