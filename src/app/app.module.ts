import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ComponentsModule } from './components/components.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HomeModule } from './pages/home/home.module'
// import { NebularModule } from './nebular/nebular.module';

import { ReactiveFormsModule } from '@angular/forms';
import { NbIconModule,
         NbMenuModule,
         NbToastrModule,
         NbToastrService,
         NbThemeModule,
         NbSidebarModule,
         NbLayoutModule,
         NbSidebarService,
         NbCheckboxModule,
         NbDatepickerModule,
         NbInputModule,
       } from '@nebular/theme';
import {environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // NebularModule,

    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCheckboxModule,
    ComponentsModule,
    NbIconModule,
    NbSidebarModule,
    NbDatepickerModule,
    NbDatepickerModule.forRoot(),
    NbInputModule,
    HomeModule,
    NbMenuModule.forRoot(),

    NbToastrModule.forRoot(),

  ],

  providers: [NbSidebarService,NbToastrService],

  bootstrap: [AppComponent]
})
export class AppModule { }
