import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarComponent } from './criar/criar.component';
import { ListarComponent } from './listar/listarDisciplinas.component';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http'
import { ServerComunicationService } from './server-comunication.service';


 

@NgModule({
  declarations: [CriarComponent, ListarComponent],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule
  ],
  providers: [ServerComunicationService]
})
export class DisciplinaModule { }
