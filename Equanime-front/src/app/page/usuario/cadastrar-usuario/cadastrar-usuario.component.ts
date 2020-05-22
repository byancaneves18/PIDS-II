import { Usuarios } from './../../../modelo/usuario.modelo';
import { AppComponent } from './../../../app.component';
import { FormGroup } from '@angular/forms';
import { UsuarioServiceService } from 'src/app/service/usuario-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})

export class CadastrarUsuarioComponent implements OnInit {

  usuario: any;

  constructor(private serviceUsuario: UsuarioServiceService) {
  }

  ngOnInit(): void {
    this.usuario = {};
  }

  cadastrarUsuario(formulario: any) {
    this.serviceUsuario.cadastrarUsuario(this.usuario).subscribe(this.usuario);
  }
}
