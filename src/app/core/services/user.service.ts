import {Injectable} from '@angular/core';

import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import {API_URL} from '../../app.component';
import {User} from '../../auth/model/user';

@Injectable()
export class UserService {

    constructor(private http: Http) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get(API_URL + '/users')
            .map(response => response.json() as User[]);
    }

    getUser(userId: string): Observable<User> {
        return this.http.get(API_URL + '/user/' + userId)
            .map(response => response.json());
    }

}
