import { Component, ElementRef, ViewChild } from '@angular/core';
import { Buffer } from 'buffer';
import { DomSanitizer } from '@angular/platform-browser';
import { base64 as base64Pdf } from './base64';

const url = URL.createObjectURL(new Blob([Buffer.from(base64Pdf, 'base64')], {type: 'application/pdf'}));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  pdfUrlFitW = this.sanitizer.bypassSecurityTrustResourceUrl(url + '#view=FitH');
  dataUrl = this.sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf;base64,' + base64Pdf + '#view=FitH');

  constructor(public sanitizer: DomSanitizer) { }
}
