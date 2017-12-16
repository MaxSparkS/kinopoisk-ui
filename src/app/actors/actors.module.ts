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
    ActorsListComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  providers: [ActorsService, AuthService],
  exports: [ActorComponent, ActorsListComponent]
})
export class ActorsModule { }
