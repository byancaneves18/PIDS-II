import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarComponent } from './criar/criar.component';
import { ListarComponent } from './listar/listarDisciplinas.component';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http'
import { DisciplinasServerComunicationService } from '../services/disciplinas-server-comunication.service';
import {FormsModule} from '@angular/forms';
import { EditarComponent } from './editar/editar.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';


 

@NgModule({
  declarations: [CriarComponent, ListarComponent, EditarComponent],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ConfirmDialogModule
  ],
  providers: [DisciplinasServerComunicationService, ConfirmationService]
})
export class DisciplinaModule { }
