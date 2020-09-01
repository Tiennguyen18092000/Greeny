import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { NbCardModule,NbInputModule,NbIconModule  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    NbCardModule,NbInputModule,NbEvaIconsModule,NbIconModule ,
  ]
})
export class SigninModule { }
