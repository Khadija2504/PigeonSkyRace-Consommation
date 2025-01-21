import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayResultsComponent } from './display-results/display-results.component';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { DownloadResultsComponent } from './download-results/download-results.component';

const routes: Routes = [
  {path: 'display-results', component: DisplayResultsComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'breeder' }},
  {path: 'download-results', component: DownloadResultsComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'breeder' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
