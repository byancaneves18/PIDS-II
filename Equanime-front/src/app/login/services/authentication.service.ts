import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment.prod';
import { Usuarios } from 'src/app/modelo/usuario.modelo';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Usuarios>;
    public currentUser: Observable<Usuarios>;
    URL_API = 'http://localhost:8080/';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Usuarios>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Usuarios {
        return this.currentUserSubject.getValue();
    }

    buscarUsuario(nome: string) {
        return this.http.post(this.URL_API + '/login', nome);
      }

    login(nome: string, senha: string) {
        return this.http.post<any>(`${environment.production}/login`, { nome, senha })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('username');
        this.currentUserSubject.next(null);
    }

    //set name user new in storage
    setUserName(username:string){

        localStorage.setItem('username', JSON.stringify(username));
        
    }

    getUserName(){

        return JSON.parse(localStorage.getItem('username'));
    }
}