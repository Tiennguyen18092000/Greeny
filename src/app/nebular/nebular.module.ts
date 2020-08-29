import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbButtonModule, NbCardModule, NbSearchService, NbLayoutModule} from '@nebular/theme';

const nebularModule = [
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,

];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    nebularModule,
  ],
  exports: [
    nebularModule,
  ],
  providers: [
    NbSearchService
  ]
})
export class NebularModule { }
