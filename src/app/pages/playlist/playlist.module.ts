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
} from '@nebular/theme';
import { TrackComponent } from './track/track.component'

@NgModule({
  declarations: [PlaylistComponent, TrackComponent],
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
