import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Grade } from '../modelo/grade.modelo';
import { GradeServiceService } from '../services/grade-service.service';
import { DisciplinasServerComunicationService } from '../services/disciplinas-server-comunication.service';
import { Router } from '@angular/router';
import { Periodo } from '../modelo/periodo.modelo';
import { MontarPeriodoComponent } from './montar-periodo/montar-periodo.component';
import { EventEmitterService } from '../services/event-emitter.service';

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

  periodos :Periodo[] = [];
  //periodo_selecionadoID: number = 1;


  constructor(private router: Router, private back: GradeServiceService, 
    private server: DisciplinasServerComunicationService, public dialog: MatDialog, 
    public serviceGrade: GradeServiceService, 
    private BackDisciplinas: DisciplinasServerComunicationService,
    private eventEmitterService: EventEmitterService 
    ) {
    
  }

  ngOnInit() {
    this.getJuncao();
    this.getPeriodos();
  }


  getPeriodos(){ //Pega os periodos do banco de dados e joga em uma variavel

    this.BackDisciplinas.getPeriodosLista().subscribe( dados =>{

      this.periodos = dados;

    });

  }


  isPeriodosCarregado():boolean{ //Retorna true se foram carregados periodos do banco de

    if(this.periodos[0]!=null){

      return true;
    }else{
      return false;
    }

  }

  selecionarPeriodo(id_periodo:number){ // chamado quando o usuario seleciona um periodo na tabela

    //this.montarPeriodo.mudarPeriodo(id_periodo);
    this.eventEmitterService.mudarPeriodo(id_periodo);

  }


  disci: string;
  di: string;
  hor: string;
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
  
 /* CadastrarAulaPerido1(){
    
    console.log("teste formulario " + this.disci);
    console.log("dia: " + this.di);
    console.log("hora: " + this.hor);
    let novaAula: Grade;
    novaAula = {
      //id : 0, // serial
      dia_semana: (this.di),
      hora: (this.hor),
      id_disciplina: Number(this.disci),
      periodo : 1
    }
    this.back.novaAula(novaAula).subscribe(sucesso => {this.router.navigate(['/grade'])}, fracasso => {})
  }*/

/*  CadastrarAulaPerido2(){
   
    //periodo: Number;
    console.log("teste formulario " + this.disci);
    console.log("dia: " + this.di);
    console.log("hora: " + this.hor);
    let novaAula: Grade;
    novaAula = {
      //id : 0, // serial
      dia_semana: (this.di),
      hora: (this.hor),
      id_disciplina: Number(this.disci),
      periodo: 2
    }
    this.back.novaAula(novaAula).subscribe(sucesso => {this.router.navigate(['/grade'])}, fracasso => {})
  }*/




}


