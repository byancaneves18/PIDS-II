import { Component, OnInit } from '@angular/core';
import { DisciplinasServerComunicationService } from '../../services/disciplinas-server-comunication.service';
import {Periodo} from '../listar/listarDisciplinas.component';
import { Disciplina } from 'src/app/modelo/disciplina.modelo';
import { DisciplinaModule } from '../disciplina.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {
  // TESTE
  // TESTE 3
  NOME: string;
  PERIODO: Periodo[] = [];
  result : any;
  PERIODO_ID: string;

  constructor(private back:DisciplinasServerComunicationService,private router: Router) { }

  ngOnInit() {

    this.back.getPeriodosLista().subscribe((dados) =>{this.PERIODO = dados ; console.log("dados ="+JSON.stringify(this.PERIODO))});
  // this.back.getPeriodosLista().subscribe((response)=>{ this.result = response;console.log(this.result)});

   // this.PERIODO = this.result;
  //  console.log("Periodos ="+this.PERIODO[0].periodo_semestre);
  //  console.log("Periodos ="+this.result);


  }

  Cadastrar(){
    console.log('Nome:'+this.NOME);
    console.log("PERIODO_ID = "+this.PERIODO_ID );
    let novaDisciplina : Disciplina ;
    novaDisciplina = {
      id_disciplina : 0,
      id_periodo: Number(this.PERIODO_ID),
      nome: this.NOME,
      id_professor:99 //professor padrão

    }

    this.back.novaDisciplina(novaDisciplina).subscribe(sucesso =>{ this.router.navigate(['/disciplinas'])}, fracasso =>{});

  }


  Cancelar(){

    this.router.navigate(['/disciplinas']);

  }


}
