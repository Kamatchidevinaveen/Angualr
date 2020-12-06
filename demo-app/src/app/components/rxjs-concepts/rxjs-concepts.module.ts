import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsConceptsRoutingModule } from './rxjs-concepts.routing.module';
import { MaterialModule } from './../../material.module';

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

@NgModule({
  declarations: [
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
    RxjsFilterComponent,
    RxjsEveryComponent,
    RxjsFindIndexComponent,
    CombineLatestComponent,
    MergeComponent,
    BufferTimeComponent,
    CatchErrorComponent,
    DebounceTimeComponent,
    DistinctUntilChangedComponent,
    DoComponent,
    MapComponent,
    ScanComponent,
    ShareComponent,
    ShareReplayComponent,
    StartWithComponent,
    SwitchMapComponent,
    TakeComponent,
    TakeUntilComponent,
    WithLatestFromComponent,
    MergeMapComponent
  ],
  imports: [RxjsConceptsRoutingModule, CommonModule, MaterialModule],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class RxjsConceptsModule {}
