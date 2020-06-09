import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './page/login/login.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UsuarioComponent } from './page/usuario/usuario.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {TableModule} from 'primeng/table';

import {DisciplinaModule} from './disciplina/disciplina.module';
import { ListarRedirectComponent } from './disciplina/listar-redirect/listar-redirect.component';
import { MontarHorarioComponent } from './montar-horario/montar-horario.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { CadastrarUsuarioComponent } from './page/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { AlterarUsuarioComponent } from './page/usuario/alterar-usuario/alterar-usuario.component';
import { MontarPeriodoComponent } from './montar-horario/montar-periodo/montar-periodo.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    CadastrarUsuarioComponent,
    AlterarUsuarioComponent,
    ListarRedirectComponent,
    MontarHorarioComponent,
    MontarPeriodoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatPaginatorModule,
    TableModule,
    DisciplinaModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    CommonModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
