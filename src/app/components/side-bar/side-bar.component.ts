import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from "@nebular/theme";
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }
  user: any;

  menuItems: Array<any> = [
    {
      title: 'MainPage',
      icon: 'home-outline',
      link: ['playlist'],
    },
    {
      title: 'Library',
      icon: 'book-outline',
      link: ['library'],

    },
    {
      title: 'Playlist',
      icon: 'headphones-outline',
      children: [
        {
          title: 'Liked Song',
          icon: 'heart-outline',
          link: ['library/liked-song']
        },
        {
          title: 'Liked Video',
          icon: 'heart-outline',
          link: ['library/liked-video']
        },
      ],
    }
  ];

  isCompact = false;

  changeSidaBar() {
    if (this.isCompact === true) {
      this.sidebarService.compact();
      this.isCompact = false;
    } else {
      this.sidebarService.expand();
      this.isCompact = true;
    }
  }
}
