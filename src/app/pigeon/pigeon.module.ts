import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PigeonRoutingModule } from './pigeon-routing.module';
import { PigeonComponent } from './pigeon.component';
import { PigeonFormComponent } from './pigeon-form/pigeon-form.component';


@NgModule({
  declarations: [
    PigeonComponent,
    PigeonFormComponent
  ],
  imports: [
    CommonModule,
    PigeonRoutingModule,
    ReactiveFormsModule
  ]
})
export class PigeonModule { }
