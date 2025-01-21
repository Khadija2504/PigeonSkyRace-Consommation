import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import { DisplayResultsComponent } from './display-results/display-results.component';


@NgModule({
  declarations: [
    ResultComponent,
    DisplayResultsComponent
  ],
  imports: [
    CommonModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
