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
import { RxjsEveryComponent } from '../rxjs-concepts/rxjs-every/rxjs-every.component';
import { RxjsFindIndexComponent } from '../rxjs-concepts/rxjs-find-index/rxjs-find-index.component';
import { CombineLatestComponent } from '../rxjs-concepts/combine-latest/combine-latest.component';
import { MergeComponent } from '../rxjs-concepts/merge/merge.component';
import { BufferTimeComponent } from '../rxjs-concepts/buffer-time/buffer-time.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { DoComponent } from './do/do.component';
import { MapComponent } from './map/map.component';
import { ScanComponent } from './scan/scan.component';
import { ShareComponent } from './share/share.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { StartWithComponent } from './start-with/start-with.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TakeComponent } from './take/take.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';
import { MergeMapComponent } from '../rxjs-concepts/merge-map/merge-map.component';

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
  {
    path: 'rxjs/every',
    component: RxjsEveryComponent,
  },
  {
    path: 'rxjs/findIndex',
    component: RxjsFindIndexComponent,
  },
  {
    path: 'rxjs/combineLatest',
    component: CombineLatestComponent
  },
  {
    path: 'rxjs/merge',
    component: MergeComponent
  },
  {
    path: 'rxjs/bufferTime',
    component: BufferTimeComponent
  },
  {
    path: 'rxjs/catchError',
    component: CatchErrorComponent
  },
  {
    path: 'rxjs/debounceTime',
    component: DebounceTimeComponent
  },
  {
    path: 'rxjs/distinctUntilChanged',
    component: DistinctUntilChangedComponent
  },
  {
    path: 'rxjs/do',
    component: DoComponent
  },
  {
    path: 'rxjs/map',
    component: MapComponent
  },
  {
    path: 'rxjs/scan',
    component: ScanComponent
  },
  {
    path: 'rxjs/share',
    component: ShareComponent
  },
  {
    path: 'rxjs/shareReplay',
    component: ShareReplayComponent
  },
  {
    path: 'rxjs/startWith',
    component: StartWithComponent
  },
  {
    path: 'rxjs/switchMap',
    component: SwitchMapComponent
  },
  {
    path: 'rxjs/take',
    component: TakeComponent
  },
  {
    path: 'rxjs/takeUntil',
    component: TakeUntilComponent
  },
  {
    path: 'rxjs/withLatestFrom',
    component: WithLatestFromComponent
  },
  {
    path: 'rxjs/mergeMap',
    component: MergeMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsConceptsRoutingModule {}
