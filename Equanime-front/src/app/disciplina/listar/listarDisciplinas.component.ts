import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ServerComunicationService } from '../server-comunication.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

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

  constructor(private server : ServerComunicationService,private confirmationService: ConfirmationService) { 




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
          
          this.tela.push({id_disciplina: disciplina.id_disciplina , nomeDisciplina : disciplina.nome, nomePeriodo: periodo.periodo_semestre});

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

  confirm(nome :string, id_disciplina : number) {
    this.confirmationService.confirm({
        message: 'Tem certeza que deseja excluir '+nome+' ?',
        acceptLabel: 'Sim',
        rejectLabel: 'Cancelar',
        accept: () => {
            console.log("accept");
          this.server.excluirDisciplinaById(id_disciplina).subscribe();
        }
    });
}



}





export interface Disciplina {
  id_disciplina:number;
  nome:string;
  id_periodo: number;
}

export interface Periodo{
  id_periodo :number;
  periodo_semestre:string;
}

export interface TelaTabela{
  id_disciplina:number;
  nomeDisciplina: string;
  nomePeriodo: string;
}

