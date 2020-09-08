import { Usuarios } from './../../../modelo/usuario.modelo';
import { AppComponent } from './../../../app.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})

export class CadastrarUsuarioComponent implements OnInit {

  usuario: any;
  form:FormGroup;
  titulo:string
  @Output() closeNovo = new EventEmitter();

  constructor(
    private serviceUsuario: UsuarioServiceService, 
    private router: Router,
    private formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.usuario = {};
    this.createForm(new Usuarios());
  }

  createForm(usuario:Usuarios){
    this.form = this.formBuilder.group({
      id: usuario.id,
      nome: usuario.nome,
      senha: usuario.senha,
      cpf: usuario.cpf,
      email: usuario.email,
      cargaHoraria: usuario.cargaHoraria,
      telefone: usuario.telefone,
      papel: usuario.papel,
      cidade: usuario.cidade
    })
  }

  novo(){
    this.titulo = "Cadastrar Usuário";
    this.createForm(new Usuarios());
  }

  editar(usuario:Usuarios){
    this.titulo = "Editar Usuário";
    this.createForm(usuario);
  }

  cadastrarUsuario() {
    var usuario = new Usuarios();
    this.form.controls['id']? usuario.id = this.form.controls['id'].value:usuario.id = null;
    this.form.controls['nome']?usuario.nome = this.form.controls['nome'].value:usuario.nome = null;
    this.form.controls['senha']?usuario.senha  = this.form.controls['senha'].value:usuario.senha = null;
    this.form.controls['telefone']?usuario.telefone = this.form.controls['telefone'].value:usuario.telefone = null;
    this.form.controls['papel']?usuario.papel = this.form.controls['papel'].value:usuario.papel = null;
    this.form.controls['email']?usuario.email = this.form.controls['email'].value:usuario.email = null;
    this.form.controls['cpf']?usuario.cpf = this.form.controls['cpf'].value:usuario.cpf = null;
    this.form.controls['cidade']?usuario.cidade = this.form.controls['cidade'].value:usuario.cidade = null;
    this.form.controls['cargaHoraria']?usuario.cargaHoraria = this.form.controls['cargaHoraria'].value:usuario.cargaHoraria = null;
    this.serviceUsuario.cadastrarUsuario(usuario).subscribe(this.usuario);
    this.closeNovo.emit(false);
  }

  close(){
    this.closeNovo.emit(false);
  }

  print(){
    console.log("cidade",this.form.controls['cidade'].value);
  }
}
