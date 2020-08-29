import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
  NbMenuModule,
  NbIconModule,
  NbDialogModule,
  NbToastrModule,
  NbToastrService,
  NbInputModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    ComponentsModule,
    NbMenuModule.forRoot(),
    NbIconModule,
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    NbInputModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
