
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Usuarios } from '../modelo/usuario.modelo';

@Injectable({
  providedIn: 'root'
})

export class UsuarioServiceService {

  URL_API = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) { }


    getUsuarios(): Observable<Usuarios[]> {
      return this.http.get<Usuarios[]>(this.URL_API + '/listar');
    }

}