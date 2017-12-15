import { MaterialComponentsModule } from './shared/material-components.module';
import { FilmsModule } from './films/films.module';
import { ActorsModule } from './actors/actors.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import {routing} from './app.routing';
import {HomeModule} from './core/components/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ActorsModule,
    FilmsModule,
    AuthModule,
    HomeModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    routing
],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
