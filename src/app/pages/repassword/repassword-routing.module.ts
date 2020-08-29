import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepasswordComponent } from './repassword.component';

const routes: Routes = [{ path: '', component: RepasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepasswordRoutingModule { }
