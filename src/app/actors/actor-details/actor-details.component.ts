import { ActorsService } from './../actors.service';
import { AuthService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from '../../core/models/Actor';

@Component({
    selector: 'app-actor-details',
    templateUrl: 'actor-details.component.html',
    styleUrls: ['actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit {

    public actor: Actor;
    public isLoading = false;

    constructor(
        public actorsService: ActorsService,
        public authService: AuthService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.isLoading = true;

        const actorId: number = +this.route.snapshot.paramMap.get('id');

        this.actorsService.getActor(actorId).subscribe(response => {
            this.actor = response;
            console.log(this.actor);
            this.isLoading = false;
        });
    }
}
