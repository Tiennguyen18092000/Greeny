import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import {
  NbCardModule,
  NbUserModule,
  NbListModule,
  NbIconModule,
  NbTooltipModule,
} from '@nebular/theme'

@NgModule({
  declarations: [PlaylistComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    NbCardModule,
    NbUserModule,
    NbListModule,
    NbIconModule,
    NbTooltipModule,
  ]
})
export class PlaylistModule { }
