import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepasswordRoutingModule } from './repassword-routing.module';
import { RepasswordComponent } from './repassword.component';


@NgModule({
  declarations: [RepasswordComponent],
  imports: [
    CommonModule,
    RepasswordRoutingModule
  ]
})
export class RepasswordModule { }
