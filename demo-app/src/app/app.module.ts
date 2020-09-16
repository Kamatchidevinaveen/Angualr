import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LazyNgrxModule } from './lazy-loading/ngrx.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SideMenuComponent } from './side-menu/side-menu/side-menu.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormsComponent } from './form-control/forms/forms.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { InlineEditTableComponent } from './components/inline-edit-table/inline-edit-table.component';
import { MainTableComponent } from './components/main-table/main-table.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { SharedDialogComponent } from './components/shared-dialog/shared-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ThemeMenuComponent } from './components/theme-menu/theme-menu.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { FormArrayTableComponent } from './components/form-array-table/form-array-table.component';
import { RxjsConceptsModule } from './components/rxjs-concepts/rxjs-concepts.module';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    FormControlComponent,
    FormsComponent,
    DataTableComponent,
    InlineEditTableComponent,
    MainTableComponent,
    SharedDialogComponent,
    ExpansionPanelComponent,
    DialogComponent,
    ThemeMenuComponent,
    StepperComponent,
    FormArrayTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    RxjsConceptsModule,
    LazyNgrxModule,
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
})
export class AppModule {}
