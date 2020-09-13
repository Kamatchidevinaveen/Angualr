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
  ],
  imports: [RxjsConceptsRoutingModule, CommonModule, MaterialModule],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class RxjsConceptsModule {}
