import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuntarServiceService {
  URL_API = 'http://localhost:8080/disciplina';

  constructor(private http: HttpClient) { }

  
    getJuncao(): Observable<any[]> {
      return this.http.get<any[]>(this.URL_API + '/listar');
    }
}
