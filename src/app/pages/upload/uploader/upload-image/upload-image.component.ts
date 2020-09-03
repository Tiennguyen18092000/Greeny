import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  isHovering: boolean;
  file : File[] = [];
  @Output()
  imgFiles = new EventEmitter<File[]>();

  constructor() { }

  ngOnInit() {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.file.push(files.item(i));
    }
    this.imgFiles.emit(this.file);
  }

}
