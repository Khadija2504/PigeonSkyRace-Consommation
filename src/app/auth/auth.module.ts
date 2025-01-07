import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
