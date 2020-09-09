import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'demo-app';
  private mediaSub: Subscription;

  public isDeviceXs: boolean;
  public isLargeDevice: boolean;
  constructor(public mediaObserver: MediaObserver) {}

  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.isDeviceXs = result.mqAlias === 'xs' ? true : false;
        this.isLargeDevice = result.mqAlias === 'lg' ? true : false;
      }
    );
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
