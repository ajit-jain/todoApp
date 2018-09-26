import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  @ViewChild('imgSrc') imgSrc: ElementRef;
  img;
  url;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    localStorage.setItem('degree', JSON.stringify(90));
  }
  fileChange(files: FileList, imgSrc = this.imgSrc) {
    console.log(files);
    const file: File = files.item(0);
    console.log(file);
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const img = new Image();
        img.onload = (e: any) => {
          const ctx = imgSrc.nativeElement.getContext('2d');
          ctx.clearRect(0, 0, this.imgSrc.nativeElement.width, this.imgSrc.nativeElement.height);
          ctx.save();
          // console.log(img.width, img.height, imgSrc.nativeElement.width, imgSrc.nativeElement.height);
          const width = imgSrc.nativeElement.width > img.width ? img.width : imgSrc.nativeElement.width;
          const height = imgSrc.nativeElement.height > img.height ? img.height : imgSrc.nativeElement.height;
          ctx.drawImage(img, 10, 10, width, height);

        };
        img.src = e.target.result;
        this.img = img;
        localStorage.setItem('degree', JSON.stringify(90));
      };
      reader.readAsDataURL(file);
    }

  }
  drawRotated(degrees = JSON.parse(localStorage.getItem('degree'))) {
    const TO_RADIANS = Math.PI / 180;
    const context = this.imgSrc.nativeElement.getContext('2d');
    const width = this.imgSrc.nativeElement.width > this.img.width ? this.img.width : this.imgSrc.nativeElement.width;
    const height = this.imgSrc.nativeElement.height > this.img.height ? this.img.height : this.imgSrc.nativeElement.height;
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, this.imgSrc.nativeElement.width, this.imgSrc.nativeElement.height);
    context.save();
    context.translate(this.imgSrc.nativeElement.width / 2, this.imgSrc.nativeElement.height / 2);

    context.rotate(degrees * TO_RADIANS);

    context.drawImage(this.img, -width / 2, -height / 2, width, height);
    context.rotate(-(degrees * TO_RADIANS));

    context.translate(-this.imgSrc.nativeElement.width / 2, -this.imgSrc.nativeElement.height / 2);

    context.restore();
    localStorage.setItem('degree', JSON.stringify((degrees + 90) % 360));
  }
  download() {
    const canvasDataUrl = this.imgSrc.nativeElement.toDataURL();
    this.url = this.sanitizer.bypassSecurityTrustUrl(canvasDataUrl);
  }
}
