import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PigeonFormComponent } from './pigeon-form/pigeon-form.component';

const routes: Routes = [
  {path: 'addPigeon', component: PigeonFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PigeonRoutingModule { }
