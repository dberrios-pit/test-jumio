import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NetverifyService } from '../app/netverify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-jumio';
  loaded = false;
  model = {
    left: true,
    middle: false,
    right: false
  };
  urlJumio: any;
  url = `https://patagoniatest.netverify.com/web/v4/app?authorizationToken=eyJhbGci
OiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAA
B2MMQvCMBBG_8vNDSS5Nsl1c6jQxaEUwUkuaSJdNEgFRfzvnm7v43u8N-TnboPedK7z5GxHQg3wuEAPztsFiYoqSKhaNE7FVshmG5NjHXwhaCBNuYhdeePL7bryud4fOb
L5Xf-OcVkXTEER-igdLIqDzKjREvLC2SSR6_yqYh-G-ThM4_4Eny9431e6ngAAAA.s7vvYpTQhtg5vtIBA4Yp7ln3lDims5O-pz5CiZ2iCgXD3o0oH1WMriQwpT1YxA2L
fsTtgl_VN-n8xt1-CmHeMA&locale=es-MX`;
  sani: any;
  constructor(public sanitizer: DomSanitizer, private netverify: NetverifyService) {

  }

  ngOnInit() {
    this.sani = this.sanitizer;
    /* this.urlJumio = this.sanitizer.bypassSecurityTrustUrl(`https://patagoniatest.netverify.com/web/v4/app?authorizationToken=eyJhbGci
    OiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAA
    B2MMQvCMBBG_8vNDSS5Nsl1c6jQxaEUwUkuaSJdNEgFRfzvnm7v43u8N-TnboPedK7z5GxHQg3wuEAPztsFiYoqSKhaNE7FVshmG5NjHXwhaCBNuYhdeePL7bryud4fOb
    L5Xf-OcVkXTEER-igdLIqDzKjREvLC2SSR6_yqYh-G-ThM4_4Eny9431e6ngAAAA.s7vvYpTQhtg5vtIBA4Yp7ln3lDims5O-pz5CiZ2iCgXD3o0oH1WMriQwpT1YxA2L
    fsTtgl_VN-n8xt1-CmHeMA&locale=es-MX`); */
    this.loaded = true;
  }
  onSubmit() {
    this.netverify.getUrl()
      .then(resp => {
        console.log('resp: ', resp);
      });
  }
}
