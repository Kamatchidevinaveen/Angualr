import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxComponent } from './ngrx.component';
import { RxjsConceptsRoutingModule } from './ngrx.routing.module';

@NgModule({
  declarations: [NgrxComponent],
  imports: [RxjsConceptsRoutingModule, CommonModule],
  exports: [NgrxComponent],
})
export class NgrxModule {}
