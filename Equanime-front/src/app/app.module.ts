import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

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





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    
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
    DisciplinaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
