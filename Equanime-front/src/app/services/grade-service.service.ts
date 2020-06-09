
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Grade } from '../modelo/grade.modelo';

@Injectable({
  providedIn: 'root'
})

export class GradeServiceService {

  url = 'http://localhost:8080/grade';

  constructor(private http: HttpClient) { }


    getGrade(): Observable<Grade[]> {
      return this.http.get<Grade[]>(this.url + '/lista');
    }

    novaAula(body: Grade): Observable<Post>{
      return this.http.post<Post>("http://localhost:8080/grade/montar",body);
    }

    setGrade(body:Grade):Observable<Post>{

      return this.http.post<Post>(this.url+"/setGrade",body);

    }
}

class Post {
  constructor(
      public id: number,
      public dia_semana: string,
      public hora: string,
      public id_disciplina: string
  ) { }
}