import { Component, ViewChild } from '@angular/core';
import { IframeComponent } from './Components/iframe/iframe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent';
  @ViewChild('iframe') iframe: IframeComponent;
  iframeVisible: boolean = false;

  add() {
    this.iframeVisible = true;
  }

  remove() {
    this.iframe.destroyIframeApp();
    setTimeout(() => {
      this.iframe.removeIframe();
      this.iframeVisible = false;
    }, 2000);
  }

}
