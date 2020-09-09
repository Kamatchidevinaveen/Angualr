import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SideMenuComponent } from './side-menu/side-menu/side-menu.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormsComponent } from './form-control/forms/forms.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { InlineEditTableComponent } from './components/inline-edit-table/inline-edit-table.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { MainRxjsComponent } from './components/main-rxjs/main-rxjs.component';
import { RxjsEmptyComponent } from './components/rxjs-empty/rxjs-empty.component';
import { RxjsDeferComponent } from './components/rxjs-defer/rxjs-defer.component';
import { RxjsGenerateComponent } from './components/rxjs-generate/rxjs-generate.component';
import { RxjsIifComponent } from './components/rxjs-iif/rxjs-iif.component';
import { RxjsIntervalComponent } from './components/rxjs-interval/rxjs-interval.component';
import { RxjsThrowErrorComponent } from './components/rxjs-throw-error/rxjs-throw-error.component';
import { RxjsTimerComponent } from './components/rxjs-timer/rxjs-timer.component';
import { RxjsConcatComponent } from './components/rxjs-concat//rxjs-concat.component';
import { RxjsPartitionComponent } from './components/rxjs-partition/rxjs-partition.component';
import { RxjsForkJoinComponent } from './components/rxjs-fork-join/rxjs-fork-join.component';
import { RxjsCancotMapComponent } from './components/rxjs-cancot-map/rxjs-cancot-map.component';
import { RxjsFindComponent } from './components/rxjs-find/rxjs-find.component';
import { FormArrayTableComponent } from './components/form-array-table/form-array-table.component';
import { RxjsFilterComponent } from './components/rxjs-filter/rxjs-filter.component';
import { MainTableComponent } from './components/main-table/main-table.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { SharedDialogComponent } from './components/shared-dialog/shared-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    FormControlComponent,
    FormsComponent,
    DataTableComponent,
    InlineEditTableComponent,
    RxjsComponent,
    MainRxjsComponent,
    RxjsDeferComponent,
    RxjsEmptyComponent,
    RxjsGenerateComponent,
    RxjsIifComponent,
    RxjsIntervalComponent,
    RxjsThrowErrorComponent,
    RxjsTimerComponent,
    RxjsConcatComponent,
    RxjsPartitionComponent,
    RxjsForkJoinComponent,
    RxjsCancotMapComponent,
    RxjsFindComponent,
    FormArrayTableComponent,
    RxjsFilterComponent,
    MainTableComponent,
    SharedDialogComponent,
    ExpansionPanelComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
})
export class AppModule {}
