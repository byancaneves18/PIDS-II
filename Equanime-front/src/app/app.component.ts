import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'equanime-front';
  opened = true;
  mostrarMenu: boolean = false;
  
  constructor(private router: Router, private authService: AuthService) {
  }
  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
    
  }
  Disciplinas()   { this.router.navigate(['/disciplinas']); }
  MontarHorario() { this.router.navigate(['/montar']);      }
  Usuarios()      { this.router.navigate(['/usuario']);     }
  Vincular()      { this.router.navigate(['/vincular']);}
  RegistrarPedido() { this.router.navigate(['/alunos/pedido']);}
  home()  { this.router.navigate(['/home']); }

  logout(){
    console.log("saiu");
    this.authService.logout();
  }

}
