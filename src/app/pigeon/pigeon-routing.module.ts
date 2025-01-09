import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PigeonFormComponent } from './pigeon-form/pigeon-form.component';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';

const routes: Routes = [
  {path: 'addPigeon', component: PigeonFormComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'breeder' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PigeonRoutingModule { }
