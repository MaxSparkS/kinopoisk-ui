import { RouterModule } from '@angular/router';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { AuthService } from './../auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { ActorsService } from './actors.service';
import { MaterialComponentsModule } from './../shared/material-components.module';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { ActorComponent } from './actor/actors-list-item.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    ActorComponent,
    ActorsListComponent,
    ActorDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    RouterModule
  ],
  providers: [ActorsService, AuthService],
  exports: [ActorComponent, ActorsListComponent, ActorDetailsComponent]
})
export class ActorsModule { }
