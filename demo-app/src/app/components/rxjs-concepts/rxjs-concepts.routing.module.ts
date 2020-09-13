import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsComponent } from '../rxjs-concepts/rxjs/rxjs.component';
import { MainRxjsComponent } from '../rxjs-concepts/main-rxjs/main-rxjs.component';
import { RxjsEmptyComponent } from '../rxjs-concepts/rxjs-empty/rxjs-empty.component';
import { RxjsDeferComponent } from '../rxjs-concepts/rxjs-defer/rxjs-defer.component';
import { RxjsGenerateComponent } from '../rxjs-concepts/rxjs-generate/rxjs-generate.component';
import { RxjsIifComponent } from '../rxjs-concepts/rxjs-iif/rxjs-iif.component';
import { RxjsIntervalComponent } from '../rxjs-concepts/rxjs-interval/rxjs-interval.component';
import { RxjsThrowErrorComponent } from '../rxjs-concepts/rxjs-throw-error/rxjs-throw-error.component';
import { RxjsTimerComponent } from '../rxjs-concepts/rxjs-timer/rxjs-timer.component';
import { RxjsConcatComponent } from '../rxjs-concepts/rxjs-concat//rxjs-concat.component';
import { RxjsPartitionComponent } from '../rxjs-concepts/rxjs-partition/rxjs-partition.component';
import { RxjsForkJoinComponent } from '../rxjs-concepts/rxjs-fork-join/rxjs-fork-join.component';
import { RxjsCancotMapComponent } from '../rxjs-concepts/rxjs-cancot-map/rxjs-cancot-map.component';
import { RxjsFindComponent } from '../rxjs-concepts/rxjs-find/rxjs-find.component';
import { RxjsFilterComponent } from '../rxjs-concepts/rxjs-filter/rxjs-filter.component';

const routes: Routes = [
  {
    path: 'rxjs/of',
    component: RxjsComponent,
  },
  {
    path: 'rxjs/main',
    component: MainRxjsComponent,
  },
  {
    path: 'rxjs/defer',
    component: RxjsDeferComponent,
  },
  {
    path: 'rxjs/empty',
    component: RxjsEmptyComponent,
  },
  {
    path: 'rxjs/generate',
    component: RxjsGenerateComponent,
  },
  {
    path: 'rxjs/iif',
    component: RxjsIifComponent,
  },
  {
    path: 'rxjs/interval',
    component: RxjsIntervalComponent,
  },
  {
    path: 'rxjs/throw-error',
    component: RxjsThrowErrorComponent,
  },
  {
    path: 'rxjs/timer',
    component: RxjsTimerComponent,
  },
  {
    path: 'rxjs/concat',
    component: RxjsConcatComponent,
  },
  {
    path: 'rxjs/partition',
    component: RxjsPartitionComponent,
  },
  {
    path: 'rxjs/fork-join',
    component: RxjsForkJoinComponent,
  },
  {
    path: 'rxjs/concat-map',
    component: RxjsCancotMapComponent,
  },
  {
    path: 'rxjs/find',
    component: RxjsFindComponent,
  },
  {
    path: 'rxjs/filter',
    component: RxjsFilterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsConceptsRoutingModule {}
