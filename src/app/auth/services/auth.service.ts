import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


import {API_URL} from '../../app.component';
import {User} from '../model/user';

@Injectable()
export class AuthService {

    isLoggedIn = false;

    constructor(private http: Http) {
    }

    private static handleError(error: any) {
        const errorMessage = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : `Server error`;
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }

    login(user: User): Observable<boolean> {
        let jsonObject;
        return this.http.post(API_URL + '/login', user)
            .map(response => jsonObject = response.json())
            .map((currentUser: User) => {
                window.sessionStorage.setItem('token', jsonObject.token);
                if (!User.isNull(currentUser)) {
                    this.isLoggedIn = true;
                    return true;
                } else {
                    this.isLoggedIn = false;
                    return false;
                }
            })
          .catch(AuthService.handleError);
    }

    logOut(): Observable<boolean> {
        window.sessionStorage.removeItem('token');
        this.isLoggedIn = !this.isLoggedIn;
        return Observable.of(false);
    }

    register(user: User): Observable<boolean> {
        return this.http.post(API_URL + '/register', user)
            .map(response => response.json() as User)
            .map(currentUser => !User.isNull(currentUser))
            .catch(AuthService.handleError);
    }


}
