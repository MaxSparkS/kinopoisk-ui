import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Actor } from '../core/models/Actor';
import 'rxjs/add/operator/take';

@Injectable()
export class ActorsService {
    constructor(
        private http: HttpClient
    ) { }

    public getActors(): Observable<Actor[]> {
        return this.http.get<Actor[]>(environment.actors_endpoint).take(5);
    }

    public getActor(actorId: number): Observable<Actor> {
        return this.http.get<Actor>(environment.actors_endpoint + `/${actorId}`);
    }
}
