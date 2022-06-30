import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    //console.log('iframe parent component destroyed');
  }

  ngOnInit(): void {
  }

  destroyIframeApp() {
    var iframe = document.getElementById('useriframe');
    if (iframe == null) return;
    var iWindow = (<HTMLIFrameElement>iframe).contentWindow;

    iWindow!.postMessage("close", '*');
  }

  removeIframe() {
    var iframe = document.getElementById('useriframe');
    if (iframe == null) return;
    iframe.remove();
  }

}
