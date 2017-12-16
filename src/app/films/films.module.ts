import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmsDetailsComponent } from './film-details/film-details.component';
import { AuthService } from './../auth/services/auth.service';
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
    FilmsListComponent,
    FilmsDetailsComponent
  ],
  providers: [FilmsService, AuthService, ],
  imports: [
    HttpClientModule,
    CommonModule,
    MaterialComponentsModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [AppFilmsListItemComponent, FilmsListComponent, FilmsDetailsComponent]
})
export class FilmsModule { }
