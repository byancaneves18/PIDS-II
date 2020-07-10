import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  private currentUserSubject: BehaviorSubject<Usuario>;
  public currentUser: Observable<Usuario>;
  URL_API = 'http://localhost:8080/';

 // private login = JSON.parse(localStorage.getItem('usuarioEstaAutenticado')||'false')
  mostrarMenuEmitter = new EventEmitter<boolean>();

    constructor(private router: Router, private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Usuario {
      return this.currentUserSubject.getValue();
  }

  public testarLogin (body : any): Observable<any> {

    return this.http.post(this.URL_API+"login",body).pipe(
      retry(2),
      catchError(this.handleError)
    );

    
  }

  getfazerLogin(acesso: boolean, usuario: Usuario){

    if(acesso){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
    
      localStorage.setItem('currentUser', JSON.stringify(usuario));

      this.router.navigate(['/home']);
      
     }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }



/*
    if(usuario.cpf == "123" && usuario.senha == "123"){

      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
    
      localStorage.setItem('currentUser', JSON.stringify(usuario));

      this.router.navigate(['/home']);
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }*/
  }

  usuarioEstaAutenticado(){
    console.log(this.usuarioAutenticado);
    return this.usuarioAutenticado;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
    this.currentUserSubject.next(null);
    
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    this.router.navigate(['/login']);
}

setUserName(username:string){

  localStorage.setItem('username', JSON.stringify(username));
  
}

getUserName(){

  return JSON.parse(localStorage.getItem('username'));
}

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = 'menssagem';
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
