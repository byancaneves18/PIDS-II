
import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    acesso: boolean = true;
  public usuario: Usuario = new Usuario();
  mostrarMenuEmitter = new EventEmitter<boolean>();
  private currentUserSubject: BehaviorSubject<Usuario>;
  private usuarioAutenticado: boolean = false;
  
  constructor(private authService: AuthService, private router: Router) { 
    this.mostrarMenuEmitter.emit(false);
  }

  ngOnInit() {
   
  }


 fazerLogin(){
    console.log(this.usuario);
    this.authService.testarLogin(this.usuario).subscribe(acesso=>{
        this.acesso=acesso;
       this.authService.getfazerLogin(acesso, this.usuario);
    })
    
  }






/*
  fazerLogin(){
    console.log(this.usuario);
    this.authService.testarLogin(this.usuario).subscribe(acesso=>{
        this.acesso=acesso;
       this.authService.getfazerLogin(acesso, this.usuario);
    })
    
  }*/
  recuperar(){
    this.router.navigate(['/recuperar']);
    console.log("tela Recuperar");
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
}








/*
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from './services/authentication.service';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
   // animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/home'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                    this.authenticationService.setUserName(this.f.username.value);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
}*/