import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelo/usuario.modelo';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { DisciplinasServerComunicationService } from 'src/app/services/disciplinas-server-comunication.service'
import { FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Usuario } from '../login/usuario';
import { Disciplina } from 'src/app/modelo/disciplina.modelo';

import { Router } from '@angular/router';
import { VincularModelo } from '../modelo/vincular.modelo';
import { VincularServiceComponent } from '../services/vincular-service.component';

@Component({
  selector: 'app-vincular-prof-disciplina',
  templateUrl: './vincular-prof-disciplina.component.html',
  styleUrls: ['./vincular-prof-disciplina.component.css']
})

export class VincularProfDisciplinaComponent implements OnInit {

  //id_periodo = 1;
  usuarios: any[] = [];
  disciplinas: any[] = [];
  //periodos: any[]=[];
  usuarioSelecionado: any;
  disciplinas_vincular: any[] = [];
  mensagem: any;
  usuario_disciplinas: VincularModelo;

  erro: any;

  constructor(private serviceVincular: VincularServiceComponent,
    private serviceUsuario: UsuarioServiceService,
    private serviceDisciplina: DisciplinasServerComunicationService,
    private router: Router) {
    this.getUsuarios();
  }

  ngOnInit(): void {

  }

  getUsuarios() {
    this.serviceUsuario.getUsuarios().subscribe((data: Usuarios[]) => {
      this.usuarios = data;
      this.getDisciplinas();
    }, (error: any) => {
      this.erro = error;
      console.log('ERRO: ', this.erro);
    });

  }

  /*getDisciplinas(id_periodo){
    console.log("id periodo =", id_periodo);
    this.serviceDisciplina.getDisciplinasByPeriodo(this.id_periodo).subscribe(
      data => {
        this.disciplinas = data;
        console.log("disciplinas = ",data);
      }
    )
      this.disciplinasOrdenadas = this.disciplinas.sort();
      console.log("-> ",this.disciplinasOrdenadas);
  }*/

  getDisciplinas() {
    this.disciplinas_vincular = [];
    this.serviceDisciplina.getDisciplinasLista().subscribe((dados) => {
      this.disciplinas = dados;
      this.disciplinas.forEach(m=>{
        this.usuarios.forEach(n=>{
          if(m.id_professor == n.id && m.id_professor != 99){
            m.professor = n.nome;
          }
        })
      })
    });
  }
  /*getPeriodosLista(){
    this.serviceDisciplina.getPeriodosLista().subscribe(
      data=>{
        this.periodos = data;
        console.log("periodos = ", data);
      }
    )
  }*/
  selecionarDisciplina(valor: any, checado: any) {
    if (checado) {
      this.disciplinas_vincular.push(valor);
    } else {
      let indice = this.disciplinas_vincular.indexOf(valor);
      while (indice >= 0) {
        this.disciplinas_vincular.splice(indice, 1);
        indice = this.disciplinas_vincular.indexOf(valor);

        console.log("blitz");
      }
    }
  }

  vincular() {
    this.usuario_disciplinas = { usuario: this.usuarioSelecionado, disciplina: this.disciplinas_vincular }
    console.log("usuario_disciplinas = ", this.usuario_disciplinas);
    this.serviceVincular.salvar(this.usuario_disciplinas).subscribe((dados) => {
      this.mensagem = dados;
    });
    this.getUsuarios();
  }

}