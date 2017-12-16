import { ActorsService } from './../actors.service';
import { Actor } from './../../core/models/Actor';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-actors-list',
    templateUrl: 'actors-list.component.html',
    styleUrls: ['actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {

    public actors$: Observable<Actor[]>;

    constructor(private actorsService: ActorsService) { }

    ngOnInit() {
        this.actors$ = this.actorsService.getActors();;
    }
}
