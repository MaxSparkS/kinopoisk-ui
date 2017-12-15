import { FilmsModule } from './films/films.module';
import { ActorsModule } from './actors/actors.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
