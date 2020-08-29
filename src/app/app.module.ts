import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ComponentsModule } from './components/components.module';

import { HomeModule } from './pages/home/home.module'

import {RepasswordModule} from './pages/repassword/repassword.module'
import { NebularModule } from './nebular/nebular.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NbIconModule } from '@nebular/theme';
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbSidebarService,NbCheckboxModule } from '@nebular/theme';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCheckboxModule,
    ComponentsModule,

    HomeModule,
  ],

  providers: [NbSidebarService],

  bootstrap: [AppComponent]
})
export class AppModule { }
