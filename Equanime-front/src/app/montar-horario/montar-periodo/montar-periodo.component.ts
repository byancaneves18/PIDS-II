import { Component, OnInit } from '@angular/core';
import { Grade } from 'src/app/modelo/grade.modelo';
import { Router } from '@angular/router';
import { GradeServiceService } from 'src/app/services/grade-service.service';
import { MatDialog } from '@angular/material/dialog';
import { Disciplina } from 'src/app/modelo/disciplina.modelo';
import { DisciplinasServerComunicationService } from 'src/app/services/disciplinas-server-comunication.service';

@Component({
  selector: 'app-montar-periodo',
  templateUrl: './montar-periodo.component.html',
  styleUrls: ['./montar-periodo.component.css']
})
export class MontarPeriodoComponent implements OnInit {

  diasDaSemana : string[] = ['SEGUNDA-FEIRA','TERÇA-FEIRA','QUARTA-FEIRA','QUINTA-FEIRA','SEXTA-FEIRA']; //placeholder, na versão final virá do banco
  horarios : string[] = ['14:50','16:40','19:00','20:40','22:30'];
  
  disciplinas : Disciplina[] = [];
  slots:Grade[] = [];
  erro: any;

  slotsLoaded : boolean = false;

  

  constructor(private router: Router, public dialog: MatDialog, 
    public backGrade: GradeServiceService, 
    private backDisciplinas: DisciplinasServerComunicationService
    ) {
    
  }

  ngOnInit() {
    this.getDisciplinas();
    this.loadSlots();
  }

  isSlotCarregado():boolean{

    if(this.slots[0]!=null){

      return true;
    }else{
      return false;
    }

  }

  isPosicionadaAqui(id_disciplina:number,hora:string,dia:string){
 

     var i = 0;
   // console.log("e slot :"+this.slots[0].dia);
      while(this.slots[i]!=null){
        console.log("a");
        if(this.slots[i].diciplina==id_disciplina&&this.slots[i].hora==hora&&this.slots[i].dia==dia){
          //console.log("disciplina id : "+id_disciplina+" esta na hora : "+hora+" dia : "+dia);
          return true;
        }
        i++;
      }
    

    return false;
  }




 loadSlots(){//Carrega os slots de horário a partir do banco de dados, note que os slots do tipo grade que são exibidos na tabela de horário

    this.backGrade.getGradesByPeriodo(1).subscribe( // periodo 1 hardcoded temporariamente 
      (data: Grade[]) => {
        this.slots = data;
        this.slotsLoaded=true;
      },
      (error: any) => {
        this.erro = error;
        console.log('ERRO: ', error);
      }
    );
      
  }

  setGradeSlot( hora:string,dia:string,disciplina){ //Função que manda pro back a informação que deve ser armazenada em um slot do horario
    
    let novaGrade : Grade ;
    novaGrade = {
      dia : dia,
      diciplina : disciplina,
      hora : hora,
      id : -1,
      id_periodo : 1

    }



    this.backGrade.setGrade(novaGrade).subscribe();

    console.log('Set grade slot');
    console.log('Hora : '+novaGrade.hora);
    console.log('Na : '+novaGrade.dia);
    console.log('disciplina : '+novaGrade.diciplina);

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

