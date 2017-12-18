import { ActorDetailsComponent } from './actors/actor-details/actor-details.component';
import { FilmsDetailsComponent } from './films/film-details/film-details.component';
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AuthComponent} from './auth/components/auth/auth.component';
import {HomeComponent} from './core/components/home/home.component';
import {AuthGuard} from './auth/services/auth-guard.service';
import {LoginFormComponent} from './auth/components/login-form/login-form.component';
import {RegisterFormComponent} from './auth/components/register-form/register-form.component';

const appRoutes: Routes = [
  { path: 'films/:id', component: FilmsDetailsComponent },
  { path: 'actors/:id', component: ActorDetailsComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent},
  { path: 'home', component: HomeComponent},
  { path: '**', redirectTo: 'home'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
