import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Grade } from '../modelo/grade.modelo';
import { GradeServiceService } from '../service/grade-service.service';
import { JuntarServiceService } from '../service/juntar-service.service';
import { ServerComunicationService } from '../disciplina/disciplinas-server-comunication.service';

export interface MontarHorarioElement {
  dia:string;
  hora: number;
  periodo: number;
  juncao: string;
}


@Component({
  selector: 'app-montar-horario',
  templateUrl: './montar-horario.component.html',
  styleUrls: ['./montar-horario.component.css']
})
export class MontarHorarioComponent implements OnInit {

  lista:any[] = [];
  grade: Grade[] = [];
  erro: any;

  matrizHorario: MontarHorarioElement[] = [
    {dia:'segunda', hora: 1450, periodo: 0,juncao: 'vago' },
    {dia:'segunda', hora: 1640, periodo: 2,juncao: 'vago'},
    {dia:'segunda', hora: 1900, periodo: 2,juncao: 'vago' },
    {dia:'segunda', hora: 2050, periodo: 2,juncao: 'vago' },
    {dia:'terça', hora: 1450, periodo: 2,juncao: 'vago' },
    {dia:'terça', hora: 1640, periodo: 2,juncao: 'vago' },
    {dia:'terça', hora: 1900, periodo: 2,juncao: 'vago' },
    {dia:'terça', hora: 2050, periodo: 2,juncao: 'vago' },
    {dia:'quarta', hora: 1450, periodo: 2,juncao: 'teste' },
    {dia:'quarta', hora: 1640, periodo: 2,juncao: 'teste' },
    {dia:'quarta', hora: 1900, periodo: 2,juncao: 'teste' },
    {dia:'quarta', hora: 2050, periodo: 2,juncao: 'teste' },
    {dia:'quinta', hora: 1450, periodo: 2,juncao: 'teste' },
    {dia:'quinta', hora: 1640, periodo: 2,juncao: 'teste' },
    {dia:'quinta', hora: 1900, periodo: 2,juncao: 'teste' },
    {dia:'quinta', hora: 2050, periodo: 2,juncao: 'joilson' },
    {dia:'sexta', hora: 1450, periodo: 2,juncao: 'teste' },
    {dia:'sexta', hora: 1640, periodo: 2,juncao: 'teste' },
    {dia:'sexta', hora: 1900, periodo: 2,juncao: 'joilson' },
    {dia:'sexta', hora: 2050, periodo: 2,juncao: 'teste' },
  ];

  dias=[
    {value: 'segunda', viewValue: 'Segunda-feira'},
    {value: 'terca', viewValue: 'Terça-feira'},
    {value: 'quarta', viewValue: 'Quarta-feira'},
    {value: 'quinta', viewValue: 'Quinta-feira'},
    {value: 'sexta', viewValue: 'Sexta-feira'}
  ];
  selectedDia = this.dias[0];



  horas:any[]=[
    {value: 1450, viewValue: '14:50'},
    {value: 1640, viewValue: '16:40'},
    {value: 1900, viewValue: '19:00'},
    {value: 2050, viewValue: '20:50'}
  ];
  selectedHora = this.horas[0];

  disciplinas:any[]=[
  ];

    first = 0;

    rows = 10;
  constructor(private server: ServerComunicationService, public dialog: MatDialog, public serviceGrade: GradeServiceService, public serviceJuntar: JuntarServiceService) {
    
  }

  ngOnInit() {
    this.getJuncao();
  }


  getJuncao(){   // Função utilizada pra pegar a lista de disciplinas
    this.serviceJuntar.getJuncao().subscribe(
      (data: any[]) => {
        this.disciplinas = data;
        console.log('disciplinas =', +JSON.stringify(data));
        console.log('VARIAVEL PREENCHIDA', this.disciplinas);
      },
      (error: any) => {
        this.erro = error;
        console.log('ERRO: ', error);
      }
    );
  }


  dia :string;

  teste(){
    console.log("Testando clicwk");
    //this.dia
    console.log("Dia: " + this.dias);
    console.log("Hora: " + this.horas);
    console.log("Disciplina "+ this.disciplinas);
  }

  salvarAula(){

  }

  setarAula(){
//    this.disciplinas.
  }

}


export interface Disciplina {
  id_disciplina:number;
  nome:string;
  id_periodo: number;
}