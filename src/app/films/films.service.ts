import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Film } from '../core/models/Film';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class FilmsService {
    constructor(
        private http: HttpClient
    ) { }

    public getFilms(page: number = 1, pageSize: number = 5): Observable<Film[]> {
        return this.http.get<Film[]>(environment.films_endpoint + `?page=${page}&pageSize=${pageSize}`,
            { headers: this.getAuthHeader() });
    }

    public getFilm(id: number): Observable<Film> {
        return this.http.get<Film>(environment.films_endpoint + `/${id}`,
            {headers: this.getAuthHeader()});
    }

    public addToFavorite(filmId: number) {
        return this.http.put(environment.favorites_films_endpoint, { filmId },
            { headers: this.getAuthHeader() })
            .subscribe(response => {
                console.log(response);
            });
    }

    public deleteFromFavorites(filmId: number) {
        return this.http.delete(environment.favorites_films_endpoint + `/${filmId}`,
            { headers: this.getAuthHeader() })
            .subscribe(response => {
                console.log(response);
            });
    }

    private getAuthHeader(): HttpHeaders {
        const token: string = sessionStorage.getItem('token');
        return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }
}
