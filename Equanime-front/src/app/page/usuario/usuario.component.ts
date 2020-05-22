import { FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { Usuarios } from 'src/app/modelo/usuario.modelo';
import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/service/usuario-service.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario: Usuarios[] = [];
  erro: any;
  cols: any[];
  first = 0;
  rows = 10;
  buscar: string;
<<<<<<< Updated upstream
  ConfirmationService: any;
  ;
=======
>>>>>>> Stashed changes

  constructor(private serviceUsuario: UsuarioServiceService, private confirmationService: ConfirmationService) {
    this.getUsuarios();
  }

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'cargaHoraria', header: 'Carga Horaria' },
      { field: 'papel', header: 'Papel' },
      { field: 'email', header: 'Email' },
      { field: 'senha', header: 'Senha' },
      { field: 'cidade', header: 'Cidade' },
      { field: 'telefone', header: 'Telefone' }
    ];
  }

  getUsuarios() {
    this.serviceUsuario.getUsuarios().subscribe((data: Usuarios[]) => {
      this.usuario = data;
    }, (error: any) => {
      this.erro = error;
      console.log('ERRO: ', this.erro);
    });
  }
  next() {
    this.first = this.first + this.rows;
  }
  prev() {
    this.first = this.first - this.rows;
  }
  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.first === (this.usuario.length - this.rows);
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }

  carregarUsuario(Usuario: any) {
    console.log(Usuario);
  }

  deletarUsuario(usuario: Usuarios) {
<<<<<<< Updated upstream
    this.confirmationService.confirm({
      message: 'Excluir ' + usuario.nome + '?',
      acceptLabel: 'Sim',
      rejectLabel: 'Cancelar',
      accept: () => {
        console.log('aksjk');
        this.serviceUsuario.deletarUsuario(usuario).subscribe();
        this.getUsuarios();
      }
      });
   }
=======
    this.serviceUsuario.deletarUsuario(usuario).subscribe();
    this.getUsuarios();
  }
>>>>>>> Stashed changes

  /*confirm(nome: string, id_disciplina: number) {
    this.confirmationService.confirm({
        message: 'Tem certeza que deseja excluir '+nome+' ?',
        acceptLabel: 'Sim',
        rejectLabel: 'Cancelar',
        accept: () => {
            console.log("accept");
          this.server.excluirDisciplinaById(id_disciplina).subscribe();
          this.router.navigate(['/disciplinas/redirect']);
        }
    });
  }*/


  buscarUsuario(buscar) {
    console.log(buscar);
    this.serviceUsuario.buscarUsuario(buscar).subscribe((data: Usuarios[]) => {
      this.usuario = data;
    }, (error: any) => {
      this.erro = error;
      console.log('ERRO: ', this.erro);
    });
  }
}
