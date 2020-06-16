
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Grade } from '../modelo/grade.modelo';
import { Dia } from '../modelo/dia_semana.modelo';
import { Alerta } from '../modelo/alerta.modelo';

@Injectable({
  providedIn: 'root'
})

export class GradeServiceService {

  url = 'http://localhost:8080/grade';

  constructor(private http: HttpClient) { }



    getAlertas():Observable<Alerta[]>{

      return this.http.get<Alerta[]>(this.url+"/getAlertas");
    }

    getDiasSemana():Observable<Dia[]>{

      return this.http.get<Dia[]>(this.url+"/getDias");

    }

    setGrade(body:Grade){ //da ordem para o back criar uma nova grade especificada no body

      return this.http.post(this.url+"/setGrade",body);

    }


    editGrade(body:Grade){ //da ordem para o back editar uma grade especificada no body

      return this.http.post(this.url+"/editGrade",body);

    }

    deleteGrade(body:Grade){ //da ordem para o back deletar uma grade especificada no body

      return this.http.post(this.url+"/deleteGrade",body);

    }


    getGradesByPeriodo(id_periodo:number):Observable<Grade[]>{ //busca no back uma lista de elementos grade pertencentes ao periodo id = id_periodo

        return this.http.post<Grade[]>(this.url+"/gradeSlotsByPeriodo",id_periodo);

    }
}

