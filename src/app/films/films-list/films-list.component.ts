import { Observable } from 'rxjs/Observable';
import { Film } from './../../core/models/Film';
import { FilmsService } from './../films.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-films-list',
    templateUrl: 'films-list.component.html',
    styleUrls: ['films-list.component.scss']
})
export class FilmsListComponent implements OnInit {

    public films$: Observable<Film[]>;

    constructor(private filmsService: FilmsService) { }

    ngOnInit() {
        this.films$ = this.filmsService.getFilmsMock();
    }
}
