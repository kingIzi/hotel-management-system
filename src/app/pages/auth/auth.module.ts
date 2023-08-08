import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AppComponent } from 'src/app/app.component';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, AuthRoutingModule, RouterModule],
  bootstrap: [AppComponent],
})
export class AuthModule {}
