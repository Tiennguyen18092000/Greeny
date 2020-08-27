import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PremiumRoutingModule } from './premium-routing.module';
import { PremiumComponent } from './premium.component';
import { NbThemeModule,
         NbLayoutModule,
         NbButtonModule,
          NbCardModule, } from '@nebular/theme';

@NgModule({
  declarations: [PremiumComponent],
  imports: [
    CommonModule,
    PremiumRoutingModule,
    NbLayoutModule,
    NbThemeModule,
    NbButtonModule,
    NbCardModule,
  ],
})
export class PremiumModule {}
