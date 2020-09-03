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
  NbLayoutModule,
  NbSidebarModule,
  NbThemeModule
} from '@nebular/theme';
import { TrackComponent } from './track/track.component'
import { ComponentsModule } from 'src/app/components/components.module';

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
    NbLayoutModule,
    ComponentsModule,
    NbSidebarModule,
  ],
})
export class PlaylistModule { }
