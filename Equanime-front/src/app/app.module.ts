import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDividerModule} from '@angular/material/divider';
import { MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { TableModule} from 'primeng/table';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { DisciplinaModule} from './disciplina/disciplina.module';
import { MontarHorarioComponent } from './montar-horario/montar-horario.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { MatTabsModule} from '@angular/material/tabs';
import { CadastrarUsuarioComponent } from './page/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { MontarPeriodoComponent } from './montar-horario/montar-periodo/montar-periodo.component';
import { CommonModule } from '@angular/common';
import { EventEmitterService } from './services/event-emitter.service';
import { MatSnackBar} from '@angular/material/snack-bar';

import { RegistrarPedidosDeAlunosModule } from './registrar-pedidos-de-alunos/registrar-pedidos-de-alunos.module';
import { MatButtonModule } from '@angular/material/button';

import { RecuperarComponent } from './recuperar/recuperar.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './login/valido/auth-guard/auth-guard.component';
import { HomeComponent } from './page/home/home.component';
import { VincularProfDisciplinaComponent } from './vincular-prof-disciplina/vincular-prof-disciplina.component';
import { DialogComponent } from './page/usuario/dialog/dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    CadastrarUsuarioComponent,
    MontarHorarioComponent,
    MontarPeriodoComponent,
    RecuperarComponent,
    HomeComponent,
    VincularProfDisciplinaComponent,
    DialogComponent
    

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
    CommonModule,
    RegistrarPedidosDeAlunosModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
    

  ],
  providers: [
    HttpClient,
    EventEmitterService,
    MatSnackBar,
    EventEmitterService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }