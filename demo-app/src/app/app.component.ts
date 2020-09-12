import { StyleService } from './services/style.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

import { CommonServiceService } from './services/common-service.service';

import { Option } from './models/option.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'demo-app';
  private mediaSub: Subscription;
  private readonly stylesBasePath = `node_modules/@angular/material/prebuilt-themes/`;

  public isDeviceXs: boolean;
  public isLargeDevice: boolean;
  public options: Array<Option>;
  public selectedTheme: Option;

  constructor(
    public mediaObserver: MediaObserver,
    private commanService: CommonServiceService,
    private readonly styleManager: StyleService
  ) {}

  public themeChangeHandler(themeToSet: Option): void {
    this.selectedTheme = themeToSet;
    console.log(themeToSet);
    this.styleManager.setStyle(`${this.stylesBasePath}${themeToSet.value}.css`);
  }

  ngOnInit(): void {
    this.styleManager.setStyle(`${this.stylesBasePath}deeppurple-amber.css`);
    this.commanService.getThemeOPtions().subscribe((res) => {
      this.options = res;
    });
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.isDeviceXs = result.mqAlias === 'xs' ? true : false;
        this.isLargeDevice = result.mqAlias === 'lg' ? true : false;
      }
    );
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}
