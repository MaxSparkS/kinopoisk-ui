import { Actor } from './../../core/models/Actor';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-actors-list-item',
    templateUrl: 'actors-list-item.component.html',
    styleUrls: ['actors-list-item.component.scss']
})
export class ActorComponent {
    @Input() actor: Actor;
}
