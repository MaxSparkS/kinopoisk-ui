import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Film } from '../core/models/Film';
import 'rxjs/add/observable/of';

@Injectable()
export class FilmsService {
    constructor(
        private http: HttpClient
    ) { }

    public getFilms(page: number = 1, pageSize: number = 5): Observable<Film[]> {
        return this.http.get<Film[]>(environment.films_endpoint + `?page=${page}&pageSize=${pageSize}`);
    }

    public getFilmsMock(): Observable<Film[]> {
        const films: Film[] = [
            new Film(1, 'The Big Lebowski', 'Dude tries to find his rug',
                'https://images-na.ssl-images-amazon.com/images' +
                '/M/MV5BZTFjMjBiYzItNzU5YS00MjdiLWJkOTktNDQ3MTE3ZjY2YTY5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
                []
            ),
            new Film(2, 'Dogma', 'Jay and Silent Bob help to save the world',
                'https://fanart.tv/api/download.php?type=download&image=138387&section=3',
                []
            ),
            new Film(3, 'Dogma', 'Jay and Silent Bob help to save the world',
                'https://fanart.tv/api/download.php?type=download&image=138387&section=3',
                []
            ),
            new Film(4, 'Dogma', 'Jay and Silent Bob help to save the world',
                'https://fanart.tv/api/download.php?type=download&image=138387&section=3',
                []
            ),
            new Film(5, 'Dogma', 'Jay and Silent Bob help to save the world',
                'https://fanart.tv/api/download.php?type=download&image=138387&section=3',
                []
            ),
        ];
        return Observable.of(films);
    }
}
