import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PremiumRoutingModule } from './premium-routing.module';
import { PremiumComponent } from './premium.component';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [PremiumComponent],
  imports: [
    CommonModule,
    PremiumRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ComponentsModule
  ],
})
export class PremiumModule {}

