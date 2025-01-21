import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CompetitionRoutingModule } from './competition-routing.module';
import { CompetitionComponent } from './competition.component';
import { CreateCompetitionComponent } from './create-competition/create-competition.component';


@NgModule({
  declarations: [
    CompetitionComponent,
    CreateCompetitionComponent
  ],
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    ReactiveFormsModule
  ]
})
export class CompetitionModule { }
