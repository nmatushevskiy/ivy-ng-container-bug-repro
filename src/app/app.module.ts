import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    A11yModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule
  ],
  exports: [
      A11yModule,
      DragDropModule,
      PortalModule,
      ScrollingModule,
      CdkStepperModule,
      CdkTableModule,
      CdkTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
