import { Component, OnInit, Injectable } from '@angular/core';
import { Grade } from 'src/app/modelo/grade.modelo';
import { Router } from '@angular/router';
import { GradeServiceService } from 'src/app/services/grade-service.service';
import { MatDialog } from '@angular/material/dialog';
import { Disciplina } from 'src/app/modelo/disciplina.modelo';
import { DisciplinasServerComunicationService } from 'src/app/services/disciplinas-server-comunication.service';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-montar-periodo',
  templateUrl: './montar-periodo.component.html',
  styleUrls: ['./montar-periodo.component.css']
})


export class MontarPeriodoComponent implements OnInit {

  diasDaSemana : string[] = ['SEGUNDA-FEIRA','TERÇA-FEIRA','QUARTA-FEIRA','QUINTA-FEIRA','SEXTA-FEIRA']; //placeholder, na versão final virá do banco
  horarios : string[] = ['14:50','16:40','19:00','20:40','22:30'];
  
  disciplinas : Disciplina[] = [];
  slots:Grade[] ;
  erro: any;

  slotsLoaded : boolean = false;
  periodo_selecionado:number = 1; //carregando periodo id = 1 como padrão


  constructor(private router: Router, public dialog: MatDialog, 
    public backGrade: GradeServiceService, 
    private backDisciplinas: DisciplinasServerComunicationService,
    private eventEmitterService: EventEmitterService   
    ) {
    
  }

  ngOnInit() {
    this.getDisciplinas();
    this.loadSlots(1); //carregando periodo id = 1 como padrão


    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((id_periodo:number) => {    
        this.mudarPeriodo(id_periodo);    
      });    
    }    


  }


  mudarPeriodo(id_novoPeriodo:number){ //chamado quando o usuario muda de periodo na tabela

    this.slots = null;
    this.slotsLoaded= false;
    console.log("Mudando para periodo: "+id_novoPeriodo);
    this.periodo_selecionado = id_novoPeriodo;
    this.loadSlots(id_novoPeriodo);
  }

  isSlotCarregado():boolean{ // retorna true se os slots ja foram carregados do banco

   /* if(this.slots[0]!=null){

      return true;
    }else{
      return false;
    }*/
    return this.slotsLoaded;


  }

  isVazio(hora:string,dia:string):boolean{// verifica se o slot hora/dia esta preenchido por alguma disciplina

    var i = 0;
    console.log("a");
       while(this.slots[i]!=null){
         if(this.slots[i].hora==hora&&this.slots[i].dia==dia){
           return false;
         }
         i++;
       }

       return true;
  }

  isPosicionadaAqui(id_disciplina:number,hora:string,dia:string){//verifica se uma dada disciplina em uma dada hora em um dado dia estão presentes no banco
 

     var i = 0;
   // console.log("e slot :"+this.slots[0].dia);
  // console.log("a");
      while(this.slots[i]!=null){
       // console.log("a");
        if(this.slots[i].diciplina==id_disciplina&&this.slots[i].hora==hora&&this.slots[i].dia==dia){
          //console.log("disciplina id : "+id_disciplina+" esta na hora : "+hora+" dia : "+dia);
          return true;
        }
        i++;
      }
    

    return false;
  }




 loadSlots(id_periodo:number){//Carrega os slots de horário a partir do banco de dados, note que os slots do tipo grade que são exibidos na tabela de horário

    this.backGrade.getGradesByPeriodo(id_periodo).subscribe( 
      (data: Grade[]) => {
        this.slots = data;
        this.slotsLoaded = true;
      },
      (error: any) => {
        this.erro = error;
        console.log('ERRO: ', error);
      }
    );
      
  }

  setGradeSlot( hora:string,dia:string,disciplina){ //Função que manda pro back a informação que deve ser armazenada em um slot do horario
    
    var i = 0
    var existe : boolean = false;
    while(this.slots[i]!=null){ //percorre a lista de slots para verificar se o slot alterado ja existe ou se é novo
       if(this.slots[i].diciplina==disciplina&&this.slots[i].hora==hora&&this.slots[i].dia==dia){
         existe = true;
       }
       i++;
     }

     if(existe&&disciplina == -1){ //disciplina = -1 significa horário vago, ou seja se esse horario esta armazenado deve ser deletado


     }else if(existe){ // se o horario existe no banco e não está sendo setado como vazio então ele deve ser editado

     }else if(disciplina != -1){ // se o horario não existe e não esta sendo setado como vazio então ele deve ser criado, caso contrário ou seja não existe e esta sendo setado como vazio nada precisa ser feito

      let novaGrade : Grade ;
      novaGrade = {
        dia : dia,
        diciplina : disciplina,
        hora : hora,
        id : -1,
        id_periodo : this.periodo_selecionado
  
      }
  
  
  
      this.backGrade.setGrade(novaGrade).subscribe();
  
      console.log('Set grade slot');
      console.log('Hora : '+novaGrade.hora);
      console.log('Na : '+novaGrade.dia);
      console.log('disciplina : '+novaGrade.diciplina);


     }





  }

  getDisciplinas(){   // Função utilizada pra pegar a lista de disciplinas
    
    this.backDisciplinas.getDisciplinasLista().subscribe(
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


}

