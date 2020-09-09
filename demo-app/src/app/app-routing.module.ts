import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormsComponent } from './form-control/forms/forms.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { InlineEditTableComponent } from './components/inline-edit-table/inline-edit-table.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { MainRxjsComponent } from './components/main-rxjs/main-rxjs.component';
import { RxjsDeferComponent } from './components/rxjs-defer/rxjs-defer.component';
import { RxjsEmptyComponent } from './components/rxjs-empty/rxjs-empty.component';
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

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
  },
  {
    path: 'form-control',
    component: FormControlComponent,
  },
  {
    path: 'form',
    component: FormsComponent,
  },
  {
    path: 'rxjs',
    component: RxjsComponent,
  },
  {
    path: 'rxjs-main',
    component: MainRxjsComponent,
  },
  {
    path: 'rxjs-defer',
    component: RxjsDeferComponent,
  },
  {
    path: 'rxjs-empty',
    component: RxjsEmptyComponent,
  },
  {
    path: 'rxjs-generate',
    component: RxjsGenerateComponent,
  },
  {
    path: 'rxjs-iif',
    component: RxjsIifComponent,
  },
  {
    path: 'rxjs-interval',
    component: RxjsIntervalComponent,
  },
  {
    path: 'rxjs-throw-error',
    component: RxjsThrowErrorComponent,
  },
  {
    path: 'rxjs-timer',
    component: RxjsTimerComponent,
  },
  {
    path: 'rxjs-concat',
    component: RxjsConcatComponent,
  },
  {
    path: 'rxjs-partition',
    component: RxjsPartitionComponent,
  },
  {
    path: 'rxjs-fork-join',
    component: RxjsForkJoinComponent,
  },
  {
    path: 'rxjs-concat-map',
    component: RxjsCancotMapComponent,
  },
  {
    path: 'rxjs-find',
    component: RxjsFindComponent,
  },
  {
    path: 'rxjs-filter',
    component: RxjsFilterComponent,
  },
  {
    path: 'main-table',
    component: MainTableComponent,
  },
  {
    path: 'expansion-panel',
    component: ExpansionPanelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
