import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadImageComponent } from './uploader/upload-image/upload-image.component';
import { UploadMusicComponent } from './uploader/upload-music/upload-music.component';
import { DropzoneDirective } from 'src/app/directives/dropzone.directive';
import {
  NbProgressBarModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbListModule
} from '@nebular/theme';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadTaskComponent } from './upload-task/upload-task.component';


@NgModule({
  declarations: [
    UploadComponent,
    UploaderComponent,
    UploadImageComponent,
    UploadMusicComponent,
    UploadTaskComponent,
    DropzoneDirective
  ],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    UploadRoutingModule,
    NbProgressBarModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbListModule
  ],
})
export class UploadModule { }
