import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../login/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;

    //Função que verifica se o usuário acessou ou não.
    if (currentUser) {
        
        return true;
    }

    // Se não acessar será retornado para pagina de login.
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
}





/*
  constructor(private authService: AuthService, private router: Router) { }
 
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
    
    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }
    
    this.router.navigate(['/login']);
    
  }*/
}
