import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DisciplinasServerComunicationService } from '../../services/disciplinas-server-comunication.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listarDisciplinas',
  templateUrl: './listarDisciplinas.component.html',
  styleUrls: ['./listarDisciplinas.component.css']
})
export class ListarComponent implements OnInit {


  disciplinas: Disciplina[];


  tela: TelaTabela[] = [];



  cols: any[];
   firt = 0;
   rows = 10;

  constructor(private server: DisciplinasServerComunicationService, private confirmationService: ConfirmationService, private router: Router,
    private snackBar: MatSnackBar) {




  }

  ngOnInit() {

    this.ListarDisciplinas();

  }


  ListarDisciplinas(){

    this.cols = [
      { field: 'nomeDisciplina', header: 'Nome' },
      { field: 'nomePeriodo', header: 'Periodo' },
    ];

    this.server.getDisciplinasLista().subscribe((dados) =>{

      this.disciplinas = dados ;
      console.log('disciplinas =' + JSON.stringify(dados));

      this.tela = [];
      for (let disciplina  of this.disciplinas) {

        let periodo: Periodo;
        this.server.getPeriodobyid(disciplina.id_periodo).subscribe((dado2) =>{
 
          periodo = dado2;
          console.log("periodo ="+JSON.stringify(periodo));
          this.tela.push({id_disciplina: disciplina.id_disciplina , nomeDisciplina : disciplina.nome, nomePeriodo: periodo.periodo_semestre});

        });


      }

    });


  }

  NovaDisciplina(){

    this.router.navigate(['/disciplinas/nova']);

  }

  EditarDisciplina(id:any ){
    this.router.navigate(['/disciplinas/editar/'+id]);
  }

  next() {
    this.firt = this.firt + this.rows;
  }

  prev() {
      this.firt = this.firt - this.rows;
  }

  reset() {
      this.firt = 0;
  }

  isLastPage(): boolean {
      return this.firt === (this.tela.length - this.rows);
  }

  isFirstPage(): boolean {
      return this.firt === 0;
  }

  confirm(nome: string, id_disciplina: number) {
    this.confirmationService.confirm({
        message: 'Tem certeza que deseja excluir ' + nome + ' ? Todas as aulas com essa disciplina também serão excluídas!',
        acceptLabel: 'Sim',
        rejectLabel: 'Cancelar',
        accept: () => {
            console.log("accept");
          this.server.excluirDisciplinaById(id_disciplina).subscribe(success=>{console.log('sucesso');this.ListarDisciplinas()},error => this.snackBar.open('Erro ao excluir disciplina :c', 'Ok',{duration: 10000,}));
          //this.router.navigate(['/disciplinas/redirect']);
         // this.ListarDisciplinas();
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

