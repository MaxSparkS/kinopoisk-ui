import { FilmsListComponent } from './films-list/films-list.component';
import { FilmComponent } from './film/film.component';

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    FilmComponent,
    FilmsListComponent
  ],
  providers: [],
  exports: [FilmComponent, FilmsListComponent]
})
export class FilmsModule { }
