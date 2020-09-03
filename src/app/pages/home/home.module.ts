import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatButtonModule} from '@angular/material/button';
import { ComponentsModule } from 'src/app/components/components.module';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    ComponentsModule,
    MatGridListModule,
  ]
})
export class HomeModule { }
