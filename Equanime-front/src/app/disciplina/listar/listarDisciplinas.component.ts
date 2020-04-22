import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ServerComunicationService } from '../server-comunication.service';

@Component({
  selector: 'app-listarDisciplinas',
  templateUrl: './listarDisciplinas.component.html',
  styleUrls: ['./listarDisciplinas.component.scss']
})
export class ListarComponent implements OnInit {


  disciplinas: Disciplina[];
  

  tela: TelaTabela[] =[] ;
  


  colunas: any[];
   primeira = 0;
   linhas = 10;

  constructor(private server : ServerComunicationService) { 




  }

  ngOnInit() {

    this.colunas = [
      { field: 'nomeDisciplina', header: 'Nome' },
      { field: 'nomePeriodo', header: 'Periodo' },
    ];

    this.server.getDisciplinasLista().subscribe((dados) =>{
      
      this.disciplinas = dados ;
      console.log("disciplinas ="+JSON.stringify(dados));


      for (let disciplina  of this.disciplinas){

        let periodo : Periodo; 
        this.server.getPeriodobyid(disciplina.id_periodo.toString()).subscribe((dado2) =>{

          periodo = dado2;
          console.log("periodo ="+JSON.stringify(periodo));
          
          this.tela.push({nomeDisciplina : disciplina.nome, nomePeriodo: periodo.periodo_semestre});

        });


      }
    
    });

  }

  next() {
    this.primeira = this.primeira + this.linhas;
  }

  prev() {
      this.primeira = this.primeira - this.linhas;
  }

  reset() {
      this.primeira = 0;
  }

  isLastPage(): boolean {
      return this.primeira === (this.disciplinas.length - this.linhas);
  }

  isFirstPage(): boolean {
      return this.primeira === 0;
  }

}





export interface Disciplina {
  id_disciplina:string;
  nome:string;
  id_periodo: Int32List;
}

export interface Periodo{
  id_periodo :number;
  periodo_semestre:string;
}

export interface TelaTabela{
  nomeDisciplina: string;
  nomePeriodo: string;
}

