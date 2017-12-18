import { FilmsService } from './../films.service';
import { AuthService } from './../../auth/services/auth.service';
import { Component, Input } from '@angular/core';
import { Film } from '../../core/models/Film';

@Component({
    selector: 'app-films-list-item',
    templateUrl: 'films-list-item.component.html',
    styleUrls: ['films-list-item.component.scss']
})
export class AppFilmsListItemComponent {
    constructor(
        public authService: AuthService,
        private filmsService: FilmsService
    ) { }

    @Input() public film: Film;

    addToFavorites() {
        this.filmsService.addToFavorite(this.film.id);
        this.film.isFavorite = !this.film.isFavorite;
    }

    deleteFromFavorites() {
        this.filmsService.deleteFromFavorites(this.film.id);
        this.film.isFavorite = !this.film.isFavorite;
    }
}
