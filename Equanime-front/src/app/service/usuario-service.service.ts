import { Usuarios } from 'src/app/modelo/usuario.modelo';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsuarioServiceService {

  URL_API = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.URL_API + '/listar');
  }

  cadastrarUsuario(formulario: Usuarios) {
    return this.http.post(this.URL_API + '/salvar', formulario);
  }

  getUsuario(id: string): Observable<Usuarios> {
    return this.http.get<Usuarios>(this.URL_API + '/id');
  }

  atualizar(id: string, request: any) {
    return this.http.put(this.URL_API, request);
  }

  deletarUsuario(usuario: Usuarios) {
    this.getUsuarios();
    return this.http.post(this.URL_API + '/deletar', usuario);
  }

  buscarUsuario(nome: string) {
    return this.http.post(this.URL_API + '/buscar', nome);
  }
}
