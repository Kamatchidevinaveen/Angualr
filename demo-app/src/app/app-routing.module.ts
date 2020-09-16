import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyNgrxModule } from './lazy-loading/ngrx.module';

import { FormControlComponent } from './components/form-control/form-control.component';
import { FormsComponent } from './form-control/forms/forms.component';
import { MainTableComponent } from './components/main-table/main-table.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { StepperComponent } from './components/stepper/stepper.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
  },
  {
    path: 'rxjs',
    loadChildren: () =>
      import('./components/rxjs-concepts/rxjs-concepts.module').then(
        (m) => m.RxjsConceptsModule
      ),
  },
  {
    path: 'ngrx',
    loadChildren: () =>
      import('./lazy-loading/ngrx.module').then((m) => m.LazyNgrxModule),
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
    path: 'main-table',
    component: MainTableComponent,
  },
  {
    path: 'expansion-panel',
    component: ExpansionPanelComponent,
  },
  {
    path: 'stepper',
    component: StepperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
