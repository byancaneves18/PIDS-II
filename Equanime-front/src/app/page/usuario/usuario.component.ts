import { FormGroup } from '@angular/forms';
import { NgModule, ViewChild } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { Usuarios } from 'src/app/modelo/usuario.modelo';
import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario: Usuarios[] = [];
  openNovo:boolean = false;
  erro: any;
  cols: any[];
  first = 0;
  rows = 10;
  buscar: string;
  userDelete:Usuarios = new Usuarios()

  ConfirmationService: any;
  ;


  constructor(private serviceUsuario: UsuarioServiceService, private confirmationService: ConfirmationService, public dialog: MatDialog, ) {
    this.getUsuarios();
  }

  @ViewChild('novoModal') cadastro: CadastrarUsuarioComponent;

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'cargaHoraria', header: 'Carga Horaria' },
      { field: 'papel', header: 'Papel' },
      { field: 'email', header: 'Email' },
      { field: 'cidade', header: 'Cidade' },
      { field: 'telefone', header: 'Telefone' }
    ];
  }

  getUsuarios() {
    this.serviceUsuario.getUsuarios().subscribe((data: Usuarios[]) => {
      this.usuario = data;
      console.log(data);
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

  carregarUsuario(Usuario: Usuarios) {
    this.cadastro.editar(Usuario);
    this.openNovo = true;
  }

  deletarUsuario(usuario: Usuarios) {

    alert('DELETAR');
    this.confirmationService.confirm({
      message: 'Excluir ' + usuario.nome + '?',
      acceptLabel: 'Sim',
      rejectLabel: 'Cancelar',
      accept: () => {
        console.log('aksjk');
       
        this.getUsuarios();
    //  }
    //  });
   }


  })}



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
  }
*/

  buscarUsuario(buscar) {
    console.log(this.buscar);
    this.serviceUsuario.buscarUsuario(this.buscar).subscribe((data: Usuarios[]) => {
      this.usuario = data;
    }, (error: any) => {
      this.erro = error;
      console.log('ERRO: ', this.erro);
    });
  }

  // openDialog(usuario: Usuarios) {
  //   this.userDelete = usuario;
  //   this.dialog.
   
  // }

  openDialog(usuario: Usuarios): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: usuario
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getUsuarios();
    });
  }

  novo(){
    this.openNovo = true;
    this.cadastro.novo();
  }

  closeNovo(){
    this.openNovo = false;
    this.getUsuarios();
  }

}
