import { ActorsListComponent } from './actors-list/actors-list.component';
import { ActorComponent } from './actor/actor.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    ActorComponent,
    ActorsListComponent
  ],
  providers: [],
  exports: [ActorComponent, ActorsListComponent]
})
export class ActorsModule { }
