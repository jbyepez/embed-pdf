import { Component, OnInit } from '@angular/core';
import { Buffer } from 'buffer';
import { DomSanitizer } from '@angular/platform-browser';
import { base64 as base64Pdf } from './base64';
const PDFObject = require('./pdfobject.js');

const url = URL.createObjectURL(new Blob([Buffer.from(base64Pdf, 'base64')], {type: 'application/pdf'}));
const options = {
  pdfOpenParams: { view: 'FitH' }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
 
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    PDFObject.embed(url, '#pdfobject', options);
  }
}
