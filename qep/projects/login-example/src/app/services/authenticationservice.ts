
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

        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, {username, password})
            .pipe(map(user => {
                if (user && user.token) {  
                    this.currentUserSubject.next(user);
                }else {

                    console.log("User object is null");
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