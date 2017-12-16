import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Film } from '../core/models/Film';

@Injectable()
export class FilmsService {
    constructor(
        private http: HttpClient
    ) { }

    public getFilms(page: number = 1, pageSize: number = 5): Observable<Film[]> {
        return this.http.get<Film[]>(environment.films_endpoint + `?page=${page}&pageSize=${pageSize}`);
    }
}
