import { Component, OnInit } from '@angular/core';
import { Buffer } from 'buffer';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { base64 as base64Pdf } from './base64';
const PDFObject = require('./pdfobject.js');

const getUrl = async () => URL.createObjectURL(new Blob([Buffer.from(base64Pdf, 'base64')], {type: 'application/pdf'}));
const options = {
  pdfOpenParams: { view: 'FitH' }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  pdfUrl: any;
 
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    getUrl().then(url => {
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      PDFObject.embed(url, '#pdfobject', options);
    });
  }
}
