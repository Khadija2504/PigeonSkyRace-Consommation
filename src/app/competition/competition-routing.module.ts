import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCompetitionComponent } from './create-competition/create-competition.component';

const routes: Routes = [
  {path: 'create-competition', component: CreateCompetitionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionRoutingModule { }
