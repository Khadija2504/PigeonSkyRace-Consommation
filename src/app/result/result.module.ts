import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import { DisplayResultsComponent } from './display-results/display-results.component';
import { DownloadResultsComponent } from './download-results/download-results.component';


@NgModule({
  declarations: [
    ResultComponent,
    DisplayResultsComponent
  ],
  imports: [
    CommonModule,
    ResultRoutingModule,
    DownloadResultsComponent
  ]
})
export class ResultModule { }
