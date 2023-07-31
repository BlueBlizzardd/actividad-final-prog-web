import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: SafeUrl = "";

  constructor () {
    this.myAngularxQrCode = 'https://www.youtube.com/watch?v=E-XoZAlEDkY';
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
}
