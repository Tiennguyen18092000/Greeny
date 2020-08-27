import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule, NbLayoutModule,NbCardModule} from '@nebular/theme';
import { SingInRoutingModule } from './sing-in-routing.module';
import { SingInComponent } from './sing-in.component';


@NgModule({
  declarations: [SingInComponent],
  imports: [
    CommonModule,
    SingInRoutingModule,
//Nebular
    NbThemeModule,
    NbLayoutModule,
    NbCardModule
  ]
})
export class SingInModule { }
