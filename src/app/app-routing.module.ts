import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m=> m.AuthModule)},
  {path: 'pigeon', loadChildren: () => import('./pigeon/pigeon.module').then(m => m.PigeonModule), canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'breeder' }},
  {path: 'error', loadChildren: () => import('./error/error.module').then(m=> m.ErrorModule)},
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
