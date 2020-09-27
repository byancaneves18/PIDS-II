import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';
import { Usuarios } from './modelo/usuario.modelo';
import { UsuarioServiceService } from './services/usuario-service.service';
export class userPapel{
  id:number;
  nome:String;
  papel: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'equanime-front';
  opened = true;
  mostrarMenu: boolean = false;
  papel : Number;
  user: any[] = [];
  teste: Number;
  iduser: number;
  use:userPapel = new userPapel();


 // papel: number;
  constructor(private serviceUsuario: UsuarioServiceService, private router: Router, private authService: AuthService) {
  }
  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
    this.pegarPapel();
    this.iduser=this.authService.getUserLogado();
   // this.teste = this.pegarPapel();
    
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

  pegarUsuario(){
    this.papel=this.authService.getUserLogado();
  }

  pegarPapel(){
    this.serviceUsuario.getUsuarios().subscribe((data: Usuarios[]) => {
      this.user = data;
      data.map(m=>{
        if(m.id==this.iduser){
          this.use=m;
        }
      })
      console.log("Aqui: ", this.use);
    });
  }
}
