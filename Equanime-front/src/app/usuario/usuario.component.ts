import { Usuarios } from 'src/app/modelo/usuario.modelo';
import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
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

  constructor(private serviceUsuario: UsuarioServiceService) {
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
      console.log('ERRO: ', error);
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
    this.serviceUsuario.deletarUsuario(usuario).subscribe();
  }

  buscarUsuario(nome: String) {
    this.serviceUsuario.buscarUsuario(nome).subscribe();
  }
}
