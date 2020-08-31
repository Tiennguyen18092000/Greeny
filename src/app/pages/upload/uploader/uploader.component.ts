import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/services/cloud.service';
@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  musicFiles: File[] = [];
  imgFiles: File[] = [];

  constructor(public cloudService: CloudService) { }

  ngOnInit(): void {
  }
  receivedImgFile(event) {
    this.imgFiles = event;
  }

  receivedMusicFile(event) {
    this.musicFiles = event;
  }

}
