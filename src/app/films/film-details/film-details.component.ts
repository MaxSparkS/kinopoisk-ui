import { FilmsService } from './../films.service';
import { AuthService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Film } from '../../core/models/Film';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-film-details',
    templateUrl: 'film-details.component.html',
    styleUrls: ['film-details.component.scss']
})
export class FilmsDetailsComponent implements OnInit {

    public film: Film;
    public isLoading = false;

    constructor(
        public filmsService: FilmsService,
        public authService: AuthService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.isLoading = true;

        const filmId: number = +this.route.snapshot.paramMap.get('id');

        this.filmsService.getFilm(filmId).subscribe(response => {
            this.film = response;
            this.isLoading = false;
        });
    }
}
