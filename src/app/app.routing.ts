import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AuthComponent} from './auth/components/auth/auth.component';
import {HomeComponent} from './core/components/home/home.component';
import {AuthGuard} from './auth/services/auth-guard.service';
import {LoginFormComponent} from "./auth/components/login-form/login-form.component";

const appRoutes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'home', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
