import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/services/cloud.service'
import { AudioService } from 'src/app/services/audio.service'
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  file: Array<any> = [];
  headerFiles: Array<any> = [];

  constructor(
    public cloudService: CloudService,
    public audioService: AudioService,
  ) {
    this.getMusicData();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.getMusicData().unsubscribe();
  }

  getMusicData() {
    return this.cloudService.getMusicData().subscribe(data => {
      this.file = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.get('name'),
          singer: e.payload.doc.get('singer'),
          artist: e.payload.doc.get('artist'),
          musicURL: e.payload.doc.get('musicURL'),
          imgURL: e.payload.doc.get('imgURL'),
          musicPath: e.payload.doc.get('musicPath'),
          imgPath: e.payload.doc.get('imgPath')
        };
      });
      this.cloudService.file = this.file;

      if (this.file.length > 5) {
        for (let i = this.file.length - 1; i > this.file.length - 6; i--) {
          this.headerFiles.push(this.file[i]);
        }
      }
    });
      

  }
  openFile(file, index) {
    this.cloudService.file.unshift(file);
    index = index + 1;
    this.cloudService.currentFile = { index, file };
    this.audioService.stop();
  }




}
