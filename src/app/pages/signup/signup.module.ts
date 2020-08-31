import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { NbCardModule,NbCheckboxModule } from '@nebular/theme';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    NbCardModule,
    NbCheckboxModule
  ]
})
export class SignupModule { }
