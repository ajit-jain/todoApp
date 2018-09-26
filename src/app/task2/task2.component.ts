import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  imageArray: Array<any> = [];
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  fileChange(files: FileList) {
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      const file: File = files.item(i);
      console.log(file);
      if (file.type.startsWith('image/')) {
        this.renderImage(file);
      }
    }
  }
  renderImage(file) {
    const blob = (window.URL).createObjectURL(file);
    this.imageArray.push({ name: file['name'], src: blob });
  }
  getSanitizeImage(src) {
    return this.sanitizer.bypassSecurityTrustUrl(src);
  }
}
