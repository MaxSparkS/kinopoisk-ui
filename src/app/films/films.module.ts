import { CoreModule } from './../core/core.module';
import { MaterialComponentsModule } from './../shared/material-components.module';
import { FilmsListComponent } from './films-list/films-list.component';
import { AppFilmsListItemComponent } from './films-list-item/films-list-item.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilmsService } from './films.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppFilmsListItemComponent,
    FilmsListComponent
  ],
  providers: [FilmsService],
  imports: [
    HttpClientModule,
    CommonModule,
    MaterialComponentsModule
  ],
  exports: [AppFilmsListItemComponent, FilmsListComponent]
})
export class FilmsModule { }
