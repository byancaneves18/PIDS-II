import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Grade } from '../modelo/grade.modelo';
import { GradeServiceService } from '../services/grade-service.service';
import { DisciplinasServerComunicationService } from '../services/disciplinas-server-comunication.service';
import { Router } from '@angular/router';

export interface grade_horaria_Elemento {
  dia:string;
  hora: string;
  periodo: number;
  juncao: string;
}


@Component({
  selector: 'app-montar-horario',
  templateUrl: './montar-horario.component.html',
  styleUrls: ['./montar-horario.component.css']
})
export class MontarHorarioComponent implements OnInit {
  disci: string;
  di: string;
  hor: string;
  lista:any[] = [];
  grade: Grade[] = [];
  erro: any;

  matrizHorario: grade_horaria_Elemento[] = [
    {dia:'SEGUNDA-FEIRA', hora: "14:50", periodo: 1,juncao: 'vago' },
    {dia:'SEGUNDA-FEIRA', hora: "16:40", periodo: 1,juncao: 'vago'},
    {dia:'SEGUNDA-FEIRA', hora: "19:00", periodo: 1,juncao: 'vago' },
    {dia:'SEGUNDA-FEIRA', hora: "20:50", periodo: 1,juncao: 'vago' },
    {dia:'terça', hora: "14:50", periodo: 2,juncao: 'vago' },
    {dia:'terça', hora: "16:40", periodo: 2,juncao: 'vago' }, 
    {dia:'terça', hora: "19:00", periodo: 2,juncao: 'vago' },
    {dia:'terça', hora: "20:50", periodo: 2,juncao: 'vago' },
    {dia:'quarta', hora: "14:50", periodo: 2,juncao: 'teste' },
    {dia:'quarta', hora: "16:40", periodo: 2,juncao: 'teste' },
    {dia:'quarta', hora: "19:00", periodo: 2,juncao: 'teste' },
    {dia:'quarta', hora: "20:50", periodo: 2,juncao: 'teste' }, 
    {dia:'quinta', hora: "14:50", periodo: 2,juncao: 'teste' },
    {dia:'quinta', hora: "16:40", periodo: 2,juncao: 'teste' },
    {dia:'quinta', hora: "19:00", periodo: 2,juncao: 'teste' },
    {dia:'quinta', hora: "20:50", periodo: 2,juncao: 'joilson' },
    {dia:'sexta', hora: "14:50", periodo: 2,juncao: 'teste' },
    {dia:'sexta', hora: "16:40", periodo: 2,juncao: 'teste' },
    {dia:'sexta', hora: "19:00", periodo: 2,juncao: 'joilson' },
    {dia:'sexta', hora: "20:50", periodo: 2,juncao: 'teste' },
  ];

  dias=[
    {value: 'SEGUNDA-FEIRA', viewValue: 'SEGUNDA-FEIRA-feira'},
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
  constructor(private router: Router, private back: GradeServiceService, 
    private server: DisciplinasServerComunicationService, public dialog: MatDialog, 
    public serviceGrade: GradeServiceService, private BackDisciplinas: DisciplinasServerComunicationService
    ) {
    
  }

  ngOnInit() {
    this.getJuncao();
  }


  getJuncao(){   // Função utilizada pra pegar a lista de disciplinas
    this.BackDisciplinas.getDisciplinasLista().subscribe(
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

  teste(){ //Botão teste
    console.log("Testando clicwk");
    //this.dia
    console.log("Dia: " + this.dias);
    console.log("Hora: " + this.horas);
    console.log("Disciplina "+ this.disciplinas);
  }
  
  CadastrarAulaPerido1(){
    
    console.log("teste formulario " + this.disci);
    console.log("dia: " + this.di);
    console.log("hora: " + this.hor);
    let novaAula: Grade;
    novaAula = {
      id : 0, // serial
      dia: (this.di),
      hora: (this.hor),
      diciplina: Number(this.disci),
      id_periodo : 1
    }
    this.back.novaAula(novaAula).subscribe(sucesso => {this.router.navigate(['/grade'])}, fracasso => {})
  }

  CadastrarAulaPerido2(){
   
    //periodo: Number;
    console.log("teste formulario " + this.disci);
    console.log("dia: " + this.di);
    console.log("hora: " + this.hor);
    let novaAula: Grade;
    novaAula = {
      id : 0, // serial
      dia: (this.di),
      hora: (this.hor),
      diciplina: Number(this.disci),
      id_periodo: 2
    }
    this.back.novaAula(novaAula).subscribe(sucesso => {this.router.navigate(['/grade'])}, fracasso => {})
  }




}

export interface Disciplina {
  id_disciplina:number;
  nome:string;
  id_periodo: number;
}
