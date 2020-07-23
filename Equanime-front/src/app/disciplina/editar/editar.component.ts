import { Component, OnInit } from '@angular/core';
import { DisciplinasServerComunicationService } from '../../services/disciplinas-server-comunication.service';
import {  Periodo } from '../listar/listarDisciplinas.component';
import { Disciplina } from 'src/app/modelo/disciplina.modelo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  PERIODO: Periodo[] = [];
 
  ID : String;
  NOME: string;
  PERIODO_ID: string;
  PROFESSOR_ID :string;

  constructor(private back:DisciplinasServerComunicationService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {

    this.back.getPeriodosLista().subscribe((dados) =>{this.PERIODO = dados ; console.log("dados ="+JSON.stringify(this.PERIODO))});
    this.route.params.subscribe((id)=>{
 

      this.back.getDisciplinabyid(parseInt(id['id'],10)).subscribe((disciplina)=>{

        this.ID = disciplina.id_disciplina.toString();
        this.NOME = disciplina.nome;
        this.PERIODO_ID = disciplina.id_periodo.toString();
        this.PROFESSOR_ID = disciplina.id_professor.toString();

      });


    });
  // this.back.getPeriodosLista().subscribe((response)=>{ this.result = response;console.log(this.result)});

   // this.PERIODO = this.result;
  //  console.log("Periodos ="+this.PERIODO[0].periodo_semestre);
  //  console.log("Periodos ="+this.result);
   

  }

  Salvar(){
    console.log("ID = "+this.ID );
    console.log('Nome:'+this.NOME);
    console.log("PERIODO_ID = "+this.PERIODO_ID );
    let novaDisciplina : Disciplina ;
    novaDisciplina = {
      id_disciplina : Number(this.ID),
      id_periodo: Number(this.PERIODO_ID),
      id_professor: Number(this.PROFESSOR_ID),
      nome: this.NOME

    }
   // this.back.novaDisciplina(novaDisciplina).subscribe();
   this.back.atualizarDisciplina(novaDisciplina).subscribe(sucesso =>{ this.router.navigate(['/disciplinas'])}, fracasso =>{});
  }

  Cancelar(){

    this.router.navigate(['/disciplinas']);
  }

}
