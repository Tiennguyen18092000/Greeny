import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
import { PlayerComponent } from './footer/player/player.component';
import {
  NbIconModule,
  NbCardModule,
  NbMenuModule,
  NbSearchModule,
  NbContextMenuModule,
  NbButtonModule,
  NbLayoutModule,
  NbUserModule,
  NbProgressBarModule,
  NbListModule,
  NbInputModule,
  NbTooltipModule,
  NbToggleModule
} from '@nebular/theme';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { ThemeComponent } from './header/theme/theme.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchComponent } from './header/search/search.component';
import { MenuComponent } from './header/menu/menu.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    PlayerComponent,
    HeaderComponent,
    ThemeComponent,
    LogoComponent,
    SearchComponent,
    MenuComponent,
    ],
  imports: [
    CommonModule,
    NbIconModule,
    MatSliderModule,
    NbCardModule,
    NbMenuModule,
    NbSearchModule,
    NbContextMenuModule,
    NbButtonModule,
    NbLayoutModule,
    NbUserModule,
    NbProgressBarModule,
    NbListModule,
    NbInputModule,
    NbTooltipModule,
    NbToggleModule

  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    
=======
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';





@NgModule({


  declarations: [NavBarComponent, SideBarComponent,],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
   MatMenuModule,
  
  ],
  exports:[
    NavBarComponent, 
>>>>>>> 2815ec4ebd6f48e683d00c9fe2c7ebbb05f12998
    
  ]
})
export class ComponentsModule { }
