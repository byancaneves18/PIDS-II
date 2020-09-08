import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Usuario } from '../login/usuario';
import { Disciplina } from '../modelo/disciplina.modelo';
import { VincularModelo } from 'src/app/modelo/vincular.modelo';

@Injectable({
  providedIn: 'root'
})

export class VincularServiceComponent{

  URL_API = "http://localhost:8080/vincular";


  constructor(private http: HttpClient) { }

  salvar(usuario_disciplinas: VincularModelo){
    //console.log("usuario = ",usuario);
    //console.log("disciplinas = ", disciplinas);
    return this.http.post(this.URL_API + '/salvar', usuario_disciplinas);
  }

}
