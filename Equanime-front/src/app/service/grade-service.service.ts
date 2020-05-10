
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Grade } from '../modelo/grade.modelo';

@Injectable({
  providedIn: 'root'
})

export class GradeServiceService {

  URL_API = 'http://localhost:8080/disciplina';

  constructor(private http: HttpClient) { }


    getGrade(): Observable<Grade[]> {
      return this.http.get<Grade[]>(this.URL_API + '/lista');
    }

}