import { Injectable } from '@angular/core';

import {HttpClient, HttpEventType } from '@angular/common/http';

import * as moment from "moment";

import {  Observable} from 'rxjs';

import {  shareReplay, tap} from 'rxjs/operators';

import { Login } from './model/login';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {

    }

    login(email:string, password:string ) {
    	// TODO
        return this.http.post<Login>('/api/login', {email, password}).pipe(
           tap(res => this.setSession)).pipe(
            shareReplay());
    }
          
    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }          

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }    
}
