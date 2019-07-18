
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../models/user';
//import { ConsoleReporter } from 'jasmine';
 
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        //this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUserSubject = new BehaviorSubject<User>(null);
        this.currentUser = this.currentUserSubject.asObservable();
    }
 
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    login(username: string, password: string) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'});
        let options = { headers: headers };    

        console.log("Recieved parameters "+username, password);
        
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`,
                { username, password })

            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    //localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            })); 
    }

    logout() {
        // remove user from local storage to log user out
        //localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}