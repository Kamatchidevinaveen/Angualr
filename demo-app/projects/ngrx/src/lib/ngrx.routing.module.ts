import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgrxComponent } from './ngrx.component';

const routes: Routes = [
  {
    path: 'ngrx/main',
    component: NgrxComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsConceptsRoutingModule {}
