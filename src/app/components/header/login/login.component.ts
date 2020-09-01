import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NbDialogService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nbMenuService: any;
  window: any;

  constructor(
    public authService: AuthService,

  ) { }

  ngOnInit(): void {
    this.nbMenuService.onItemClick()
    .pipe(
      filter(({ tag }) => tag === 'my-context-menu'),
      map(({ item: { title } }) => title),
    )
    .subscribe(title => this.window.alert(`${title} was clicked!`));
  }

  items = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];


  


}
