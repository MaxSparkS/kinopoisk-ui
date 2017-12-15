import { HttpClient } from '@angular/common/http';
import { FilmsService } from './films/films.service';
import { CoreModule } from './core/core.module';
import { MaterialComponentsModule } from './shared/material-components.module';
import { FilmsModule } from './films/films.module';
import { ActorsModule } from './actors/actors.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ActorsModule,
    FilmsModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialComponentsModule
  ],
  providers: [FilmsService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
